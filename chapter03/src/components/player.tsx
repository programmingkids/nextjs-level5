import type { Player } from '@/app/players/layout';

type PlayerBoxProps = {
  player: Player;
};

export const PlayerRow = function ({
  player: { name, username, created_at },
}: PlayerBoxProps) {
  return (
    <tr>
      <td className="p-4 border border-gray-500">{name}</td>
      <td className="p-4 border border-gray-500">{username}</td>
      <td className="p-4 border border-gray-500">
        {new Date(created_at).toLocaleString('ja-JP')}
      </td>
    </tr>
  );
};
