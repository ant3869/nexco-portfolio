import { useEffect } from 'react';

// Tracks the pointer over any `.spotlight-card` element and feeds its
// position into the CSS spotlight gradient. Renders nothing.
export default function SpotlightEffect() {
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;

    const handler = (e: MouseEvent) => {
      const card = (e.target as Element | null)?.closest?.('.spotlight-card');
      if (!(card instanceof HTMLElement)) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
    };

    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return null;
}
