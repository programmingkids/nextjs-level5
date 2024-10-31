import { PlayerRow } from '@/components/player';
import { type Player } from '@/app/players/work01/page';

// 10秒後にキャッシュを削除する
export const revalidate = 10;

export default async function Page() {
  const url =
    'https://cog-study.herokuapp.com/nextjs_level5/chapter04/players/';

  const res = await fetch(url);
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
