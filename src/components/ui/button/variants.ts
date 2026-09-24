import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "group relative inline-flex shrink-0 select-none items-center justify-center gap-3",
    "rounded-full font-medium tracking-[0.08em] whitespace-nowrap uppercase",
    "transition-[background-color,border-color,color,box-shadow] duration-300 ease-(--ease-out)",
    "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
        accent: "bg-accent text-[#111111] hover:bg-(--signal-glow)",
        outline: "border border-foreground/15 text-foreground hover:border-foreground/40 hover:bg-foreground/[0.03]",
        /* For the always-dark panels */
        inverse: "bg-inverse-foreground text-inverse hover:bg-white",
        "inverse-outline":
          "border border-inverse-foreground/25 text-inverse-foreground hover:border-inverse-foreground hover:bg-inverse-foreground/5",
        link: "h-auto rounded-sm px-0 text-foreground",
      },
      size: {
        sm: "h-10 px-5 text-[0.75rem]",
        md: "h-12 px-6 text-[0.8125rem]",
        lg: "h-14 px-8 text-[0.8125rem] sm:h-16 sm:px-9 sm:text-sm",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    compoundVariants: [{ variant: "link", className: "h-auto px-0 sm:h-auto sm:px-0" }],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
