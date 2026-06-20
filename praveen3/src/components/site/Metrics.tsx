import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 19, suffix: "+", label: "Years of Clinical Expertise" },
  { value: 1000, suffix: "+", label: "Operative Cases" },
  { value: 46, suffix: "+", label: "International Lectures" },
  { value: 18, suffix: "+", label: "Scientific Publications" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1400;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(to * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-border lg:grid-cols-4 lg:divide-x lg:divide-y-0">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className={`px-6 py-10 lg:px-10 lg:py-14 ${
              i >= 2 ? "border-t border-border lg:border-t-0" : ""
            }`}
          >
            <p className="text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
              <Counter to={m.value} suffix={m.suffix} />
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
