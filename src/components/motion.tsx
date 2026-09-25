import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

export function AnimatedWords({ text, className = "", accentFrom }: { text: string; className?: string; accentFrom?: number }) {
  return (
    <span className={cn("word-reveal", className)} aria-label={text}>
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`} className={cn("word-reveal-item", accentFrom !== undefined && index >= accentFrom && "text-gradient")} style={{ "--word-delay": `${index * 72}ms` } as React.CSSProperties} aria-hidden="true">{word}&nbsp;</span>
      ))}
    </span>
  );
}

export function Counter({ value, suffix = "", duration = 1200 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      if (reduced) { setDisplay(value); observer.disconnect(); return; }
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.5 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [duration, value]);
  return <span ref={ref}>{display}{suffix}</span>;
}
