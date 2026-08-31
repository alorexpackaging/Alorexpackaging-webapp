import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/site/container";
import { Logo } from "@/components/site/logo";
import { Separator } from "@/components/ui/separator";
import { PRODUCTS } from "@/lib/data/products";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/process", label: "Process" },
  { href: "/why-us", label: "Why Us" },
  { href: "/contact", label: "Contact" },
] as const;

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-secondary text-secondary-foreground">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo onDark />
            <p className="mt-5 text-sm leading-relaxed text-secondary-foreground/65">
              A new-generation non woven bag manufacturing plant — built for
              quality, priced factory-direct. Custom printing, bulk supply,
              pan-India delivery.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold tracking-[0.18em] text-gold uppercase">
              Navigate
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-secondary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold tracking-[0.18em] text-gold uppercase">
              Products
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {PRODUCTS.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products#${product.slug}`}
                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-secondary-foreground"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-col gap-3 text-sm text-secondary-foreground/70 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-gold" />
              <a href="tel:+919756565319" className="hover:text-secondary-foreground">
                +91 97565 65319
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-gold" />
              <a
                href="mailto:info@alorexpackaging.com"
                className="hover:text-secondary-foreground"
              >
                info@alorexpackaging.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-gold" />
              Pan-India Delivery
            </li>
          </ul>

          <p className="text-xs text-secondary-foreground/50">
            © {year} Alorex Packaging LLP. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
