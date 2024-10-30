// 通信処理
export async function getPlayers() {
  const url =
    'https://cog-study.herokuapp.com/nextjs_level5/chapter03/players/';
  const res = await fetch(url);
  const players = await res.json();
  return players;
}
