//export const fetchCache = 'default-cache';

import { PlayerBox } from '@/components/playerBox';
import { cookies } from 'next/headers';

export type Player = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  job: string;
  icon: string;
  color: string;
  created_at: string;
};

export default async function Page() {
  const url =
    'https://cog-study.herokuapp.com/nextjs_level5/chapter02/player/1';
  // キャッシュする
  const res = await fetch(url);
  const player = await res.json();
  console.log(player);

  // ダイナミック関数を呼び出す
  // クッキーを呼び出す
  cookies();

  // 2回目の通信処理
  const url2 =
    'https://cog-study.herokuapp.com/nextjs_level5/chapter02/player/2';
  // ダイナミック関数以降はキャッシュしない
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
