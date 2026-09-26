"use client";

import { useState } from "react";

type Props = {
  youtubeId: string;
  title: string;
  poster: string;
};

/**
 * A YouTube video that loads on click: until then it's just a poster image,
 * so the page stays fast and nothing is fetched from YouTube.
 */
export function VideoPlayer({ youtubeId, title, poster }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="video">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button type="button" className="video__poster" onClick={() => setPlaying(true)} aria-label={`Play: ${title}`}>
          <img src={poster} alt="" />
          <span className="video__play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
