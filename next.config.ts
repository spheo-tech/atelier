import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Static export: `npm run build` writes a plain HTML/CSS/JS site to /out.
   * Atelier is frontend only; checkout happens on Gumroad (or any store link).
   */
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
};

export default nextConfig;
