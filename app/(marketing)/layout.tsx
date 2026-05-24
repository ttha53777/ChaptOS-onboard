import "./marketing.css";
import type { ReactNode } from "react";
import { MarketingNav } from "./components/MarketingNav";
import { MarketingFooter } from "./components/MarketingFooter";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mk-root">
      <MarketingNav />
      <main>{children}</main>
      <MarketingFooter />
    </div>
  );
}
