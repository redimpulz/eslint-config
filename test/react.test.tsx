import { useEffect, useState } from 'react';
import type { User } from './types';

interface Props {
  user: User;
}

export function UserCard({ user }: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('User loaded:', user.name);
  }, [user.name]);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
