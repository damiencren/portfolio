"use client";

import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type IntlSegmenterInstance = {
  segment: (input: string) => Iterable<{ segment: string }>;
};

type IntlWithOptionalSegmenter = typeof Intl & {
  Segmenter?: new (
    locales?: string | string[],
    options?: { granularity?: "grapheme" | "word" | "sentence" }
  ) => IntlSegmenterInstance;
};

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  // Split text into grapheme clusters so emojis and complex scripts aren't split mid-animation
  const graphemes = useMemo(() => {
    try {
      // Use Intl.Segmenter when available for correct grapheme segmentation
      const intlWithSegmenter = Intl as unknown as IntlWithOptionalSegmenter;
      if (typeof Intl !== "undefined" && intlWithSegmenter.Segmenter) {
        const segmenter = new intlWithSegmenter.Segmenter(undefined, { granularity: "grapheme" });
        // Map segments to their string representation
        return Array.from(segmenter.segment(text), (s) => s.segment);
      }
    } catch {
      // Fallback below
    }
    // Fallback: split by Unicode code points (handles surrogate pairs, though not all ZWJ clusters)
    return Array.from(text);
  }, [text]);

  useEffect(() => {
    setDisplayedText("");
    setI(0);
  }, [text]);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < graphemes.length) {
        setDisplayedText(graphemes.slice(0, i + 1).join(""));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, graphemes]);

  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
      aria-label={text}
      aria-live="polite"
    >
      {displayedText}
      {i < graphemes.length && (
        <span
          key={i}
          aria-hidden
          className="inline-block align-baseline ml-2 w-[1.2px] h-[0.8em] bg-current animate-caret"
        />
      )}
    </h1>
  );
}
