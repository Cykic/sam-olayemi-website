import { LoaderCircle } from "lucide-react";
import type { ComponentPropsWithRef } from "react";

import { buttonVariants, type ButtonVariantProps } from "@/components/ui/button/variants";
import { cn } from "@/utils";

export type ButtonProps = ComponentPropsWithRef<"button"> &
  ButtonVariantProps & {
    isLoading?: boolean;
  };

export const Button = ({
  className,
  variant,
  size,
  fullWidth,
  isLoading = false,
  disabled,
  children,
  type = "button",
  ...props
}: ButtonProps) => (
  <button
    type={type}
    disabled={disabled || isLoading}
    aria-busy={isLoading || undefined}
    className={cn(buttonVariants({ variant, size, fullWidth }), className)}
    {...props}
  >
    {isLoading ? <LoaderCircle size={16} aria-hidden="true" className="animate-spin" /> : null}
    {children}
  </button>
);
