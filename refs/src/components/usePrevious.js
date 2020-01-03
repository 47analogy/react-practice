import { useRef, useEffect } from 'react';

export default function usePrevious(item) {
  const prevRef = useRef;

  useEffect(() => {
    prevRef.current = item;
  });

  return prevRef.current;
}
