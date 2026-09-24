/**
 * A swipeable, snapping row of cards for phones. It bleeds to the screen
 * edges while the first card keeps the page gutter; pair it with a
 * breakpoint-prefixed layout (e.g. `md:grid md:grid-cols-2`) and
 * `RAIL_RESET` to turn it back into a grid on wider screens.
 */
export const RAIL =
  "flex gap-3 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-px-(--page-px) -mx-(--page-px) px-(--page-px) pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden *:shrink-0 *:snap-start";

export const RAIL_RESET = "md:mx-0 md:overflow-visible md:px-0 md:pb-0 md:*:shrink";

/** Card width inside the rail: most of the screen, with the next card peeking in */
export const RAIL_ITEM = "w-[84%] md:w-auto";
