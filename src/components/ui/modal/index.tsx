"use client";

import { X } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";

import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/utils";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
};

/**
 * A native <dialog>: the browser handles the focus trap, Esc, the top layer
 * and returning focus to whatever opened it.
 */
export const Modal = ({ open, onClose, title, children, className }: ModalProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-label={title}
      onClose={onClose}
      onClick={(event) => {
        // A click on the backdrop lands on the dialog element itself
        if (event.target === event.currentTarget) onClose();
      }}
      className={cn(
        "m-auto w-[calc(100%-2rem)] max-w-lg rounded-(--radius-card) border border-border bg-card p-0 text-foreground shadow-lift",
        "open:animate-[zoom-in_300ms_var(--ease-out)]",
        className,
      )}
    >
      <div className="relative p-6 sm:p-8">
        <IconButton aria-label="Close" size="sm" onClick={onClose} className="absolute top-4 right-4">
          <X size={18} aria-hidden="true" />
        </IconButton>
        {children}
      </div>
    </dialog>
  );
};
