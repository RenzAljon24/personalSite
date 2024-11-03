import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date | undefined): string {
  // Check if the input is undefined or null
  if (!date) {
    return "Date not provided"; // Return a message for undefined dates
  }

  // Convert string input to Date object if necessary
  const dateObject = typeof date === 'string' ? new Date(date) : date;

  // Check if the dateObject is a valid Date
  if (!(dateObject instanceof Date) || isNaN(dateObject.getTime())) {
    return "Invalid date"; // Return a fallback message if the date is invalid
  }

  // Return the formatted date in a Philippine format
  return dateObject.toLocaleDateString("en-PH", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

