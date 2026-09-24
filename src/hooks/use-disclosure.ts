"use client";

import { useCallback, useState } from "react";

export const useDisclosure = (defaultOpen = false) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((previous) => !previous), []);

  return { isOpen, open, close, toggle, setIsOpen };
};
