import { PlayerRow } from '@/components/player';

export type Player = {
  name: string;
  username: string;
  created_at: string;
};

export default async function Page() {
  const url =
    'https://cog-study.herokuapp.com/nextjs_level5/chapter04/players/';

  // キャッシュするが
  // 10秒後にキャッシュを削除する
  const res = await fetch(url, {
    next: {
      revalidate: 10,
    },
  });
  const players = await res.json();

  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Players</h1>
      <table className="mx-auto my-4">
        <tbody>
          {players.map((player: Player) => (
            <PlayerRow key={player.id} player={player} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
