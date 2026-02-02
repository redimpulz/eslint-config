import type { User } from './types';

export function greet(user: User): string {
  return `Hello, ${user.name}!`;
}

export const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
};
