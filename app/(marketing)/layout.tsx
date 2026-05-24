import type { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return <div className={`${inter.variable} font-sans`}>{children}</div>;
}
