import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date | undefined): string {
  
  if (!date) {
    return "Date not provided"; 
  }

 
  const dateObject = typeof date === 'string' ? new Date(date) : date;

  // Check if the dateObject is a valid Date
  if (!(dateObject instanceof Date) || isNaN(dateObject.getTime())) {
    return "Invalid date"; 
  }

  
  return dateObject.toLocaleDateString("en-PH", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

