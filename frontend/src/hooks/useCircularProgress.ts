import { useEffect, useRef, useState } from "react";
import { animateCircularProgress } from "../utils";

interface UseCircularProgressOptions {
  percentage: number;
  inView: boolean;
  duration?: number;
}

/**
 * Hook per animare un circular progress bar
 * @param percentage - Valore percentuale del progresso (0-100)
 * @param isVisible - Se true anima forward, se false anima backward
 * @param duration - Durata dell'animazione in ms (default: 1000)
 * @returns circleRef da assegnare al cerchio SVG e displayValue da mostrare
 */
export const useCircularProgress = ({
  percentage,
  inView,
  duration = 1000,
}: UseCircularProgressOptions) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    const cleanup = animateCircularProgress({
      circle,
      targetPercentage: percentage,
      currentValue: displayValue,
      setDisplayValue,
      direction: inView ? "forward" : "backward",
      duration: duration,
    });
    return cleanup;
  }, [inView]);

  return { circleRef, displayValue };
};
