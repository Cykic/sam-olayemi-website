import type { ComponentPropsWithRef } from "react";

import { cn } from "@/utils";

export type ContainerProps = ComponentPropsWithRef<"div">;

export const Container = ({ className, ...props }: ContainerProps) => (
  <div className={cn("mx-auto w-full max-w-(--page-max) px-(--page-px)", className)} {...props} />
);
