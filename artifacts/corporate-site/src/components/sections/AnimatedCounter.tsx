import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";

export function AnimatedCounter({ end, prefix = "", suffix = "", label }: { end: number; prefix?: string; suffix?: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const value = useCountUp(isInView ? end : 0, 2.5);

  const isFloat = end % 1 !== 0;
  const displayValue = isFloat ? (value * (end / Math.max(end, 100))).toFixed(1) : value;

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6" data-testid={`counter-${label.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight">
        {prefix}{end === 4.2 && isInView ? 4.2 : value}{suffix}
      </div>
      <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{label}</div>
    </div>
  );
}
