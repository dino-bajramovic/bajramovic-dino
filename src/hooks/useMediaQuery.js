/**
 * @copyright 2026 dino-bajramovic
 * @license Apache-2.0
 */

import { useEffect, useState } from 'react';

/**
 * Tracks a CSS media query from JavaScript, for the cases where the decision
 * changes what gets rendered rather than only how it looks.
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = (event) => setMatches(event.matches);

    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}
