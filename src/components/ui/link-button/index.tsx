import Link from "next/link";
import type { ComponentPropsWithRef } from "react";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import { buttonVariants, type ButtonVariantProps } from "@/components/ui/button/variants";
import { cn } from "@/utils";

export type LinkButtonProps = ComponentPropsWithRef<typeof Link> &
  ButtonVariantProps & {
    /** Trailing arrow; on by default because every button here leads somewhere */
    arrow?: boolean;
  };

export const LinkButton = ({ className, variant, size, fullWidth, arrow = true, children, ...props }: LinkButtonProps) => (
  <Link className={cn(buttonVariants({ variant, size, fullWidth }), className)} {...props}>
    {children}
    {arrow ? <ArrowIcon /> : null}
  </Link>
);
