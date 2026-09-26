"use client";

import { useState } from "react";
import { collection } from "@/content/home";
import { categories, templates } from "@/content/templates";
import { RichText } from "@/components/ui/RichText";
import { StudioCard } from "./StudioCard";
import { TemplateCard } from "./TemplateCard";

const ALL = "All";

export function Collection() {
  const [filter, setFilter] = useState(ALL);
  const shown = filter === ALL ? templates : templates.filter((t) => t.category === filter);

  return (
    <section id="collection" className="section collection" aria-labelledby="collection-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="label label--rule">{collection.eyebrow}</span>
          <h2 id="collection-title" className="section-title">
            <RichText text={collection.title} />
          </h2>
          <p className="section-intro">{collection.intro}</p>
        </div>

        <div className="filters reveal" role="group" aria-label="Filter by category">
          {[ALL, ...categories].map((c) => {
            const count = c === ALL ? templates.length : templates.filter((t) => t.category === c).length;
            return (
              <button
                key={c}
                type="button"
                className="filter"
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
              >
                {c}
                <sup>{count}</sup>
              </button>
            );
          })}
        </div>

        <div className="grid reveal">
          {shown.map((t) => (
            <div
              key={`${filter}-${t.slug}`}
              className={`grid__item${t.status === "available" && t.featured ? " grid__item--wide" : ""}`}
            >
              {t.status === "available" ? <TemplateCard template={t} /> : <StudioCard template={t} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
