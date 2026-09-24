import type { ComponentPropsWithRef, ReactNode } from "react";

import { cn } from "@/utils";

export type FieldProps = {
  id: string;
  label: ReactNode;
  hint?: ReactNode;
  error?: string;
  optional?: boolean;
  children: ReactNode;
  className?: string;
};

export const fieldErrorId = (id: string) => `${id}-error`;
export const fieldHintId = (id: string) => `${id}-hint`;

/** Label, control, hint and error, wired together for assistive tech */
export const Field = ({ id, label, hint, error, optional, children, className }: FieldProps) => (
  <div className={cn("flex flex-col gap-2", className)}>
    <label htmlFor={id} className="flex items-baseline justify-between gap-4 text-sm font-medium">
      {label}
      {optional ? <span className="font-mono text-[0.6875rem] tracking-[0.1em] text-muted-foreground uppercase">Optional</span> : null}
    </label>
    {children}
    {hint && !error ? (
      <p id={fieldHintId(id)} className="text-sm text-muted-foreground">
        {hint}
      </p>
    ) : null}
    {error ? (
      <p id={fieldErrorId(id)} className="text-sm font-medium text-destructive">
        {error}
      </p>
    ) : null}
  </div>
);

const CONTROL = cn(
  "w-full rounded-xl border bg-card px-4 text-base text-foreground placeholder:text-muted-foreground/70",
  "transition-[border-color,box-shadow] duration-200 outline-none",
  "focus:border-foreground focus:ring-4 focus:ring-foreground/10",
  "aria-invalid:border-destructive aria-invalid:focus:ring-destructive/15",
);

export const Input = ({ className, ...props }: ComponentPropsWithRef<"input">) => (
  <input className={cn(CONTROL, "h-14 border-border", className)} {...props} />
);

export const Textarea = ({ className, ...props }: ComponentPropsWithRef<"textarea">) => (
  <textarea className={cn(CONTROL, "min-h-44 resize-y border-border py-4 leading-relaxed", className)} {...props} />
);

export type ChoiceProps = Omit<ComponentPropsWithRef<"input">, "type"> & {
  type: "checkbox" | "radio";
  label: string;
  hint?: string;
};

/** A checkbox or radio styled as a selectable card; the native input stays focusable */
export const Choice = ({ type, label, hint, className, ...props }: ChoiceProps) => (
  <label
    className={cn(
      "group relative flex min-h-16 cursor-pointer items-center gap-4 rounded-xl border border-border bg-card px-4 py-3",
      "transition-[border-color,background-color] duration-200 hover:border-foreground/40",
      "has-checked:border-foreground has-checked:bg-foreground/[0.03]",
      "has-focus-visible:ring-2 has-focus-visible:ring-ring has-focus-visible:ring-offset-2 has-focus-visible:ring-offset-background",
      className,
    )}
  >
    <input type={type} className="peer sr-only" {...props} />
    <span
      aria-hidden="true"
      className={cn(
        "flex size-5 shrink-0 items-center justify-center border border-foreground/30 transition-colors",
        type === "radio" ? "rounded-full" : "rounded-md",
        "peer-checked:border-foreground peer-checked:bg-foreground",
      )}
    >
      <span className={cn("size-2 bg-background opacity-0 transition-opacity group-has-checked:opacity-100", type === "radio" ? "rounded-full" : "rounded-[2px]")} />
    </span>
    <span className="flex flex-col">
      <span className="font-medium">{label}</span>
      {hint ? <span className="text-sm text-muted-foreground">{hint}</span> : null}
    </span>
  </label>
);
