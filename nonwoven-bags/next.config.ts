import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This app lives in a subdirectory of a larger repo that also has its
  // own (unrelated) package-lock.json at the parent level — pin the
  // workspace root explicitly so Turbopack doesn't have to guess it.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
