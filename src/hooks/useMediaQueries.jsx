import { useMediaQuery } from "react-responsive";

// Define breakpoints
const breakpoints = {
  xs: 480,  // Extra Small (Mobile)
  sm: 640,  // Small
  md: 768,  // Medium (Tablets)
  lg: 1024, // Large (Laptops)
  xl: 1280, // Extra Large (Desktops)
  xxl: 1536, // 2K screens
};

// Custom hook to get screen size
export default () => {
  const isXs = useMediaQuery({ maxWidth: breakpoints.xs });
  const isSm = useMediaQuery({ minWidth: breakpoints.sm });
  const isMd = useMediaQuery({ minWidth: breakpoints.md });
  const isLg = useMediaQuery({ minWidth: breakpoints.lg });
  const isXl = useMediaQuery({ minWidth: breakpoints.xl });
  const isXxl = useMediaQuery({ minWidth: breakpoints.xxl });

  return { isXs, isSm, isMd, isLg, isXl, isXxl };
};