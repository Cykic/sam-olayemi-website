import type { ReactNode } from "react";

/* A CSS entrance rather than a motion component: it runs before hydration,
   so a server-rendered page is never held invisible waiting for JavaScript.
   Fill mode is `backwards`, so no transform is left on this wrapper once the
   entrance ends (a lingering transform would trap fixed-position children). */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="flex flex-1 animate-page flex-col">{children}</div>;
}
