import React, { useEffect, useState } from 'react';
import cn from 'clsx';
import s from './ExampleTransition.module.sass';

export type Size = { width: number; height: number };

// Кастомный хук на задержку
const useMountTransition = (isMounted: boolean, unmountDelay: number) => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

  useEffect(() => {
    let timeoutId: null | ReturnType<typeof setTimeout> = null;

    if (isMounted && !hasTransitionedIn) {
      setHasTransitionedIn(true);
    } else if (!isMounted && hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(false), unmountDelay);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [unmountDelay, isMounted, hasTransitionedIn]);

  return hasTransitionedIn;
};

export const ExampleTransition = () => {
  const [isMounted, setIsMounted] = useState(false);
  const hasTransitionedIn = useMountTransition(isMounted, 1000);

  return (
    <div className={s.container}>
      <button onClick={() => setIsMounted(!isMounted)}>{`${isMounted ? 'Hide' : 'Show'} Element`}</button>

      <div className={s.content}>
        {(hasTransitionedIn || isMounted) && (
          <div className={cn(s.card, hasTransitionedIn && s.in, isMounted && s.visible)}>Card Content</div>
        )}
      </div>
    </div>
  );
};
