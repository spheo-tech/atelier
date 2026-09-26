import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";

/**
 * Google Fonts, self-hosted by next/font. Each exposes a CSS variable that
 * src/styles/tokens.css maps to --serif, --sans and --mono.
 */

export const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  fallback: ["Times New Roman", "Georgia", "serif"],
  variable: "--font-serif",
});

export const sans = Geist({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
  variable: "--font-sans",
});

export const mono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
  variable: "--font-mono",
});

export const fontVariables = [serif.variable, sans.variable, mono.variable].join(" ");
