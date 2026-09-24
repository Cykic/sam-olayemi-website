import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithRef } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/utils";

export const sectionVariants = cva("relative w-full", {
  variants: {
    tone: {
      default: "bg-background text-foreground",
      surface: "bg-surface text-foreground",
      /* Dark in both themes; lifted slightly off the page in dark mode */
      inverse: "bg-inverse text-inverse-foreground",
    },
    spacing: {
      default: "py-(--section-y)",
      compact: "py-[calc(var(--section-y)*0.6)]",
      none: "",
    },
    rule: {
      true: "border-t border-border",
    },
  },
  defaultVariants: {
    tone: "default",
    spacing: "default",
  },
});

export type SectionProps = ComponentPropsWithRef<"section"> &
  VariantProps<typeof sectionVariants> & {
    containerClassName?: string;
  };

export const Section = ({ className, containerClassName, tone, spacing, rule, children, ...props }: SectionProps) => (
  <section className={cn(sectionVariants({ tone, spacing, rule }), className)} {...props}>
    <Container className={containerClassName}>{children}</Container>
  </section>
);
