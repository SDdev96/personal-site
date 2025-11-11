// src/utils/animateCircularProgress.ts
interface AnimateCircularProgressOptions {
  circle: SVGCircleElement;
  targetPercentage: number;
  currentValue: number;
  setDisplayValue: (value: number) => void;
  duration?: number;
}

/**
 * Anima un circular progress bar in avanti (da currentValue a targetPercentage)
 */
export const animateForward = ({
  circle,
  targetPercentage,
  setDisplayValue,
  duration = 1000,
}: Omit<AnimateCircularProgressOptions, "currentValue">) => {
  const radius = 70; // r del cerchio
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference - (targetPercentage / 100) * circumference;

  // Anima il cerchio SVG
  circle.style.strokeDashoffset = `${targetOffset}`;

  // Anima il numero
  let currentValue = 0;
  const steps = 50;
  const increment = targetPercentage / steps;
  const stepTime = duration / steps;

  const interval = setInterval(() => {
    currentValue += increment;
    if (currentValue >= targetPercentage) {
      currentValue = targetPercentage;
      clearInterval(interval);
    }
    setDisplayValue(Math.round(currentValue));
  }, stepTime);

  return () => clearInterval(interval);
};

/**
 * Anima un circular progress bar all'indietro (da currentValue a 0)
 */
export const animateBackward = ({
  circle,
  currentValue,
  setDisplayValue,
  duration = 1000,
}: AnimateCircularProgressOptions) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  // Anima il cerchio SVG tornando alla posizione iniziale
  circle.style.strokeDashoffset = `${circumference}`;

  // Anima il numero all'indietro
  const steps = 50;
  const decrement = currentValue / steps;
  const stepTime = duration / steps;
  let value = currentValue;

  const interval = setInterval(() => {
    value -= decrement;
    if (value <= 0) {
      value = 0;
      clearInterval(interval);
    }
    setDisplayValue(Math.round(value));
  }, stepTime);

  return () => clearInterval(interval);
};

/**
 * Anima un circular progress bar (wrapper che decide direzione)
 */
export const animateCircularProgress = ({
  circle,
  targetPercentage,
  currentValue,
  setDisplayValue,
  direction,
  duration,
}: AnimateCircularProgressOptions & {
  direction: "forward" | "backward";
  duration?: number;
}) => {
  if (direction === "forward") {
    return animateForward({
      circle,
      targetPercentage,
      setDisplayValue,
      duration,
    });
  } else {
    return animateBackward({
      circle,
      targetPercentage,
      currentValue,
      setDisplayValue,
      duration,
    });
  }
};
