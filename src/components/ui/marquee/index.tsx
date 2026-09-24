import { cn } from "@/utils";

export type MarqueeProps = {
  items: readonly string[];
  label: string;
  className?: string;
};

/** A CSS-only ticker. It pauses on hover and stands still for reduced motion. */
export const Marquee = ({ items, label, className }: MarqueeProps) => (
  <div className={cn("group mask-fade-x relative flex overflow-hidden", className)}>
    <p className="sr-only">
      {label}: {items.join(", ")}.
    </p>
    <div aria-hidden="true" className="flex w-max shrink-0 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
      {[0, 1].map((copy) => (
        <ul key={copy} className="flex shrink-0 items-center">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-8 pr-8 whitespace-nowrap">
              {item}
              <span className="text-accent">×</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);
