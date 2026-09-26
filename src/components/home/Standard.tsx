import { standard } from "@/content/home";
import { RichText } from "@/components/ui/RichText";

function CodeArt() {
  return (
    <pre className="code-art" aria-hidden="true">
      <code>
        <span className="tok-c">{"// src/content/site.ts"}</span>
        {"\n"}
        <span className="tok-k">export const</span> siteConfig = {"{"}
        {"\n  "}name: <span className="tok-s">&quot;Your Brand&quot;</span>,
        {"\n  "}tagline: <span className="tok-s">&quot;Made for your people&quot;</span>,
        {"\n  "}title: <span className="tok-s">&quot;Your Brand | What you do best&quot;</span>,
        {"\n  "}currency: <span className="tok-s">&quot;EUR&quot;</span>,
        {"\n"}
        {"}"}
        <span className="caret" />
      </code>
    </pre>
  );
}

function ScoreArt() {
  return (
    <div className="score-art" aria-hidden="true">
      <svg viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="52" className="score-art__track" />
        <circle cx="60" cy="60" r="52" className="score-art__fill" pathLength="100" />
      </svg>
      <span>100</span>
    </div>
  );
}

function TokensArt() {
  const swatches = ["#c4472b", "#f4f0e8", "#8f6dc8", "#15130f"];
  return (
    <div className="tokens-art" aria-hidden="true">
      <div className="tokens-art__swatches">
        {swatches.map((c) => (
          <i key={c} style={{ background: c }} />
        ))}
      </div>
      <code>--accent: #c4472b;</code>
      <code>--radius: 28px;</code>
    </div>
  );
}

export function Standard() {
  return (
    <section id="standard" className="section section--night standard" aria-labelledby="standard-title">
      <div className="container">
        <div className="section-head section-head--split reveal">
          <div>
            <span className="label label--rule">{standard.eyebrow}</span>
            <h2 id="standard-title" className="section-title">
              <RichText text={standard.title} />
            </h2>
          </div>
          <p className="section-intro">{standard.intro}</p>
        </div>

        <ul className="bento">
          {standard.items.map((item, i) => (
            <li key={item.title} className={`bento__item bento__item--${item.kind} reveal`} style={{ transitionDelay: `${i * 60}ms` }}>
              {item.kind === "code" && <CodeArt />}
              {item.kind === "score" && <ScoreArt />}
              {item.kind === "tokens" && <TokensArt />}
              <div className="bento__text">
                <span className="bento__num">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              {item.kind === "hosts" && (
                <ul className="hosts" aria-label="Supported hosts">
                  {standard.hosts.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
