import { breakpoints, breakAt } from "./breakpoints";

export const theme = {
  // 8px = 0.8rem;
  spacing: (number) => `${number * 0.8}rem`,
  breakpoints,
  breakAt,
};
