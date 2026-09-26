import { marquee } from "@/content/home";
import { Sparkle } from "@/components/ui/Icons";

export function Marquee() {
  const row = (hidden?: boolean) => (
    <ul className="marquee__row" aria-hidden={hidden || undefined}>
      {marquee.map((item) => (
        <li key={item}>
          {item}
          <Sparkle className="marquee__star" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee" role="region" aria-label="What every template includes">
      <div className="marquee__track">
        {row()}
        {row(true)}
      </div>
    </div>
  );
}
