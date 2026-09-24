import { cn } from "@/utils";

export type ArrowIconProps = {
  className?: string;
  /** Diagonal (↗) for links that leave the current context */
  diagonal?: boolean;
};

/**
 * The site's one arrow. Inside a `group` it slides out on hover while a
 * second copy slides in behind it, so the movement reads as "onward".
 */
export const ArrowIcon = ({ className, diagonal = false }: ArrowIconProps) => {
  const path = diagonal ? "M5 15 15 5M7 5h8v8" : "M3 10h13M11 5l5 5-5 5";
  const exit = diagonal
    ? "group-hover:translate-x-[120%] group-hover:-translate-y-[120%]"
    : "group-hover:translate-x-[130%]";
  const enter = diagonal
    ? "-translate-x-[120%] translate-y-[120%] group-hover:translate-0"
    : "-translate-x-[130%] group-hover:translate-x-0";

  return (
    <span aria-hidden="true" className={cn("relative inline-flex size-[1.1em] shrink-0 overflow-hidden", className)}>
      {[exit, enter].map((motion, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(
            "absolute inset-0 size-full transition-transform duration-400 ease-(--ease-out) motion-reduce:transition-none",
            motion,
          )}
        >
          <path d={path} />
        </svg>
      ))}
    </span>
  );
};
