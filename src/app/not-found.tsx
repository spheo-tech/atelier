import Link from "next/link";
import { ArrowLeft } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <section className="not-found container">
      <span className="label">Error 404</span>
      <h1 className="section-title">
        This piece isn’t in the <em className="accent">collection</em>.
      </h1>
      <Link className="btn btn--ink btn--lg" href="/">
        <ArrowLeft /> Back to the studio
      </Link>
    </section>
  );
}
