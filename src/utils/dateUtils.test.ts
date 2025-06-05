import { describe, it, expect } from 'vitest';
import { toRelativeTimeString } from './dateUtils';

describe('toRelativeTimeString', () => {
  it('returns "just now" for dates a few seconds in the past', () => {
    const date = new Date(Date.now() - 5000);
    expect(toRelativeTimeString(date)).toBe('just now');
  });

  it('formats minutes in the past', () => {
    const date = new Date(Date.now() - 5 * 60 * 1000);
    expect(toRelativeTimeString(date)).toBe('5 minutes ago');
  });

  it('formats seconds in the future', () => {
    const date = new Date(Date.now() + 30 * 1000);
    expect(toRelativeTimeString(date)).toBe('in a few seconds');
  });

  it('formats minutes in the future', () => {
    const date = new Date(Date.now() + 3 * 60 * 1000);
    expect(toRelativeTimeString(date)).toBe('in 3 minutes');
  });
});

