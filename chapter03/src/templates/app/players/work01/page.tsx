import type { Player } from '@/app/players/layout';
import { PlayerRow } from '@/components/player';
import { timeout } from '@/lib/functions';
import { getPlayers } from '@/lib/api';

export default async function Page() {
  // 2秒間待機する
  await timeout(2000);
  // 待機完了後、通信処理を行う
  // 2回目の通信処理　キャッシュヒットする
  const players = await getPlayers();

  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Page Players</h1>
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
