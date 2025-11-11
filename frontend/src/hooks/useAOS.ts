// src/hooks/useAOS.ts
import { useEffect } from 'react';
import AOS from 'aos';
import type { AosOptions } from 'aos';



export const useAOS = (options?: AosOptions) => {
  useEffect(() => {
    AOS.init({
      ...options
    });

    AOS.refresh();

    return () => {
      AOS.refresh();
    };
  }, [options]);
};