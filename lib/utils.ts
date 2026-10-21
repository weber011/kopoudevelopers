import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge Tailwind CSS classes safely.
 * Required by shadcn/ui components like EclipseButton.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
