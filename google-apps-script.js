// Paste this into Google Apps Script (Extensions → Apps Script)
// Then: Deploy → Manage deployments → Edit (pencil) → Version: New version → Deploy
// (Editing the existing deployment keeps the same /exec URL the website uses.)
//
// IMPORTANT: Replace YOUR_SPREADSHEET_ID below with the ID from your Google Sheet URL:
// https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit
// Keep the Sheet itself restricted (not "Anyone with the link") — the ID alone grants no access.

const SPREADSHEET_ID = '1ije8gkbyh2Hkcmi2wQaUa0iMHlXsgfdSbeqtTARvI4g';

// Abuse limits
const MAX_BODY_BYTES     = 5000;  // reject oversized payloads
const MAX_PER_WINDOW     = 30;    // max submissions accepted...
const WINDOW_SECONDS     = 600;   // ...per 10 minutes (whole site)
const MAX_PER_PHONE_HOUR = 3;     // max submissions per phone number per hour

const LIMITS = { name: 80, phone: 20, email: 120, city: 100, bagType: 200,
                 bagSize: 100, qty: 40, printing: 40, specs: 1000, source: 20 };

function doPost(e) {
  try {
    const raw = (e && e.postData && e.postData.contents) || '';
    if (raw.length > MAX_BODY_BYTES) return reply(false);

    const d = JSON.parse(raw);
    if (!d || typeof d !== 'object') return reply(false);

    // Honeypot: real visitors never fill this hidden field. Pretend success.
    if (d.website) return reply(true);

    // Clean + cap every field
    const f = {};
    Object.keys(LIMITS).forEach(k => { f[k] = clean(d[k], LIMITS[k]); });

    // Required fields + format checks (mirrors the website's validation)
    const digits = f.phone.replace(/[\s\-()]/g, '').replace(/^\+?91/, '');
    if (f.name.length < 2 || !/^[A-Za-z\s.\-']+$/.test(f.name)) return reply(false);
    if (!/^[6-9]\d{9}$/.test(digits))                         return reply(false);
    if (f.city.length < 2)                                     return reply(false);
    if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) return reply(false);

    // Rate limits
    const cache = CacheService.getScriptCache();
    const lock  = LockService.getScriptLock();
    lock.waitLock(5000);
    try {
      const count = parseInt(cache.get('rl_window') || '0', 10);
      if (count >= MAX_PER_WINDOW) return reply(false);
      cache.put('rl_window', String(count + 1), WINDOW_SECONDS);

      const phoneKey = 'rl_ph_' + digits;
      const pCount = parseInt(cache.get(phoneKey) || '0', 10);
      if (pCount >= MAX_PER_PHONE_HOUR) return reply(true); // silently drop duplicates
      cache.put(phoneKey, String(pCount + 1), 3600);
    } finally {
      lock.releaseLock();
    }

    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();

    // Add header row on first submission
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp (IST)', 'Full Name', 'Mobile Number', 'Email Address',
        'City & State', 'Bag Type', 'Size of Bags', 'Quantity',
        'Custom Printing', 'Additional Notes', 'Source'
      ]);
      sheet.getRange(1, 1, 1, 11).setFontWeight('bold').setBackground('#C8673A').setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' }),
      safe(f.name), safe(f.phone), safe(f.email), safe(f.city),
      safe(f.bagType), safe(f.bagSize), safe(f.qty), safe(f.printing),
      safe(f.specs), safe(f.source || 'Enquiry Form')
    ]);

    return reply(true);

  } catch (err) {
    console.error(err);      // visible in Apps Script → Executions, not to the caller
    return reply(false);
  }
}

// Trim, strip control characters, and cap length
function clean(v, max) {
  return String(v == null ? '' : v)
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim()
    .slice(0, max);
}

// Prevent spreadsheet formula injection: values starting with = + - @ (or tab/CR)
// would otherwise be executed as formulas (e.g. "+91..." or "=IMPORTXML(...)").
function safe(v) {
  return /^[=+\-@\t\r]/.test(v) ? "'" + v : v;
}

function reply(ok) {
  return ContentService
    .createTextOutput(JSON.stringify({ success: ok }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
