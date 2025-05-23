// src/utils/dateUtils.ts

/**
 * Converts a Date object to a human-readable relative time string
 * @param date - The date to convert
 * @returns Relative time string like "3 hours ago", "2 days ago", etc.
 */
export const toRelativeTimeString = (date: Date): string => {
    try {
      const now = new Date();
      const diffInMs = now.getTime() - date.getTime();
      const diffInSeconds = Math.floor(diffInMs / 1000);
      
      // Handle future dates
      if (diffInSeconds < 0) {
        const absDiff = Math.abs(diffInSeconds);
        
        if (absDiff < 60) return 'in a few seconds';
        if (absDiff < 3600) return `in ${Math.floor(absDiff / 60)} minutes`;
        if (absDiff < 86400) return `in ${Math.floor(absDiff / 3600)} hours`;
        if (absDiff < 2592000) return `in ${Math.floor(absDiff / 86400)} days`;
        if (absDiff < 31536000) return `in ${Math.floor(absDiff / 2592000)} months`;
        return `in ${Math.floor(absDiff / 31536000)} years`;
      }
      
      // Handle past dates
      if (diffInSeconds < 10) return 'just now';
      if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
      
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      if (diffInMinutes < 60) {
        return diffInMinutes === 1 ? '1 minute ago' : `${diffInMinutes} minutes ago`;
      }
      
      const diffInHours = Math.floor(diffInMinutes / 60);
      if (diffInHours < 24) {
        return diffInHours === 1 ? '1 hour ago' : `${diffInHours} hours ago`;
      }
      
      const diffInDays = Math.floor(diffInHours / 24);
      if (diffInDays < 30) {
        return diffInDays === 1 ? '1 day ago' : `${diffInDays} days ago`;
      }
      
      const diffInMonths = Math.floor(diffInDays / 30);
      if (diffInMonths < 12) {
        return diffInMonths === 1 ? '1 month ago' : `${diffInMonths} months ago`;
      }
      
      const diffInYears = Math.floor(diffInMonths / 12);
      return diffInYears === 1 ? '1 year ago' : `${diffInYears} years ago`;
      
    } catch (error) {
      console.error('Error formatting relative time:', error);
      return 'some time ago';
    }
  };
  
  /**
   * Extends Date prototype with toRelativeTimeString method
   * Call this once in your app's entry point if you prefer prototype extension
   */
  export const extendDatePrototype = (): void => {
    if (!Date.prototype.toRelativeTimeString) {
      Date.prototype.toRelativeTimeString = function(this: Date): string {
        return toRelativeTimeString(this);
      };
    }
  };
  
  // Declare module augmentation for TypeScript
  declare global {
    interface Date {
      toRelativeTimeString?(): string;
    }
  }