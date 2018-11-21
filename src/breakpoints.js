export const MOBILE_BREAKPOINT = 374;
export const TABLET_BREAKPOINT = 768;
export const DESKTOP_BREAKPOINT = 992;
export const DESKTOP_LARGE_BREAKPOINT = 1200;

export const breakpoints = {
  mobile: MOBILE_BREAKPOINT,
  tablet: TABLET_BREAKPOINT,
  desktop: DESKTOP_BREAKPOINT,
  desktopLarge: DESKTOP_LARGE_BREAKPOINT,
};

export const queries = {
  mobile: `(min-width: ${breakpoints.mobile}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
  desktopLarge: `(min-width: ${breakpoints.desktopLarge}px)`,
};

export default breakpoints;
