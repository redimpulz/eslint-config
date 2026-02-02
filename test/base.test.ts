// Import order violation: should be alphabetically sorted
import { User } from "./types"; // Type import should use 'import type'
import { z } from "zod"; // This should come after local imports

export function greet(user: User): string {
  return `Hello, ${user.name}!`;
}

export const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
};

// Using z just to avoid unused import
export const schema = z.string();
