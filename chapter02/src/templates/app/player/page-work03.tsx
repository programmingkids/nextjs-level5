import { PlayerBox } from '@/components/playerBox';

export type Player = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  icon: string;
  color: string;
  created_at: string;
};

export default async function Page() {
  const url =
    'https://cog-study.herokuapp.com/nextjs_level5/chapter02/player/1';
  // キャッシュしない
  const res = await fetch(url, {
    cache: 'no-cache',
  });
  const player = await res.json();
  console.log(player);

  // 2回目の通信処理
  const url2 =
    'https://cog-study.herokuapp.com/nextjs_level5/chapter02/player/2';
  // キャッシュは未設定
  // 2回目以降の通信は以前の通信設定の影響をうける
  // そのため、未設定でもキャッシュしない
  const res2 = await fetch(url2);
  const player2 = await res2.json();
  console.log(player2);

  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Player</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 p-4">
        <div className="col-start-1 md:col-start-2 md:col-span-3 lg:col-start-2 lg:col-span-1">
          <PlayerBox player={player} />
        </div>
        <div className="col-start-1 md:col-start-2 md:col-span-3 lg:col-start-2 lg:col-span-1">
          <PlayerBox player={player2} />
        </div>
      </div>
    </div>
  );
}
