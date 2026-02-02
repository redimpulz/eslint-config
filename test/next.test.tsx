import Image from 'next/image';
import Link from 'next/link';
import type { User } from './types';

interface Props {
  user: User;
}

export default function UserPage({ user }: Props) {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>{user.name}</h1>
      <Image src="/avatar.jpg" alt={user.name} width={100} height={100} />
    </div>
  );
}
