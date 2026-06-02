// ============================================================
// Nexora Technology — Utility Functions
// ============================================================

/**
 * Merge class names, filtering out falsy values.
 * Lightweight alternative to clsx for simple conditional classes.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
