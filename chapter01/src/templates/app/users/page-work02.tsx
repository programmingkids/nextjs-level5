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

export default async function Page() {
  const url = 'https://cog-study.herokuapp.com/nextjs_level5/chapter01/users/';
  const res = await fetch(url);
  const users = await res.json();

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
