export default async function Page() {
  const url = 'https://cog-study.herokuapp.com/nextjs_level5/chapter01/users/';
  const res = await fetch(url);
  const users = await res.json();
  console.log(users);

  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Users</h1>
      <div className="py-4 px-6"></div>
    </div>
  );
}