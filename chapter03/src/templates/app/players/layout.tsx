import { PlayerRow } from '@/components/player';
import { getPlayers } from '@/lib/api';

export type Player = {
  id: number;
  name: string;
  username: string;
  created_at: string;
};

type LayoutProps = {
  children: React.ReactNode;
};

export default async function Page({ children }: LayoutProps) {
  // 1回目の通信処理　キャッシュヒットしない
  const players = await getPlayers();
  return (
    <>
      <h1 className="p-4 bg-blue-200 text-xl text-center">Layout Players</h1>
      <table className="mx-auto my-4">
        <tbody>
          {players.map((player: Player) => (
            <PlayerRow key={player.id} player={player} />
          ))}
        </tbody>
      </table>
      {children}
    </>
  );
}
