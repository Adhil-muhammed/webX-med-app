import { useState, useEffect, useRef } from "react";

interface UseScrollStartReturn {
  isScrolling: boolean;
  scrollStarted: boolean;
  isSticky: boolean;
}

export const useScrollStart = (
  stickyThreshold: number = 100
): UseScrollStartReturn => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [scrollStarted, setScrollStarted] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const scrollStartedRef = useRef<boolean>(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;

    const handleScroll = (): void => {
      const scrollY = window.scrollY;

      // Mark that scrolling has started at least once
      if (!scrollStartedRef.current) {
        scrollStartedRef.current = true;
        setScrollStarted(true);
      }

      // Set scrolling state to true
      setIsScrolling(true);

      // Check if should be sticky based on scroll position
      setIsSticky(scrollY > stickyThreshold);

      // Clear existing timeout
      if (timeout) {
        clearTimeout(timeout);
      }

      // Set timeout to detect scroll end
      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [stickyThreshold]);

  return { isScrolling, scrollStarted, isSticky };
};
