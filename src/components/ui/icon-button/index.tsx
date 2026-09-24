import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithRef } from "react";

import { cn } from "@/utils";

export const iconButtonVariants = cva(
  [
    "inline-flex shrink-0 select-none items-center justify-center rounded-full",
    "transition-[background-color,border-color,color,transform] duration-200 ease-(--ease-out)",
    "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-40 motion-safe:active:scale-95",
  ],
  {
    variants: {
      variant: {
        outline: "border border-foreground/15 text-foreground hover:border-foreground/60",
        ghost: "text-foreground hover:bg-foreground/5",
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
      },
      size: {
        sm: "size-10",
        md: "size-11",
        lg: "size-12",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "md",
    },
  },
);

export type IconButtonProps = ComponentPropsWithRef<"button"> &
  VariantProps<typeof iconButtonVariants> & {
    "aria-label": string;
  };

export const IconButton = ({ className, variant, size, type = "button", ...props }: IconButtonProps) => (
  <button type={type} className={cn(iconButtonVariants({ variant, size }), className)} {...props} />
);
