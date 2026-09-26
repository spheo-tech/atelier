import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

type Props = {
  url?: string;
  className?: string;
  dark?: boolean;
  children: ReactNode;
};

/** A minimal browser window: traffic lights, an address pill and a screen. */
export function BrowserFrame({ url, className, dark, children }: Props) {
  return (
    <div className={cx("browser", dark && "browser--dark", className)}>
      <div className="browser__bar" aria-hidden="true">
        <span className="browser__dots">
          <i />
          <i />
          <i />
        </span>
        {url && <span className="browser__url">{url}</span>}
        <span className="browser__spacer" />
      </div>
      <div className="browser__screen">{children}</div>
    </div>
  );
}
