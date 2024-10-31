'use client';

import { useEffect, useState } from 'react';
import { UserBox } from '@/components/userBox';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  icon: string;
  color: string;
};

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);

  // クライアントコンポーネントでの通信処理
  useEffect(() => {
    (async () => {
      const url =
        'https://cog-study.herokuapp.com/nextjs_level5/chapter05/users';
      const res = await fetch(url);
      const users = await res.json();
      setUsers(users);
    })();
  }, []);

  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {users.map((user: User) => (
          <UserBox key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
