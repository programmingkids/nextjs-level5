import Image, { StaticImageData } from 'next/image';
import type { Player } from '@/app/player/page';
import image1 from '@/images/image1.jpg';
import image2 from '@/images/image2.jpg';

type PlayerBoxProps = {
  player: Player;
};

const colors: {
  [key: string]: string;
} = {
  red: 'w-full h-40 bg-red-600',
  green: 'w-full h-40 bg-green-600',
};

const icons: {
  [key: string]: StaticImageData;
} = {
  image1: image1,
  image2: image2,
};

export const PlayerBox = function ({
  player: { name, username, email, address, job, color, icon, created_at },
}: PlayerBoxProps) {
  return (
    <div className="mt-4 mb-4 pb-4 sbg-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-lg h-32 overflow-hidden ">
        <div className={`${colors[color]}`}></div>
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <Image
          className="object-cover object-center h-32"
          src={icons[icon]}
          alt={name}
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">{name}</h2>
        <p className="text-gray-500">{email}</p>
      </div>
      <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li className="flex flex-col items-center justify-around">
          <div className="font-bold">ニックネーム</div>
          <div>{username}</div>
        </li>
        <li className="flex flex-col items-center justify-between">
          <div className="font-bold">住所</div>
          <div>{address}</div>
        </li>
        <li className="flex flex-col items-center justify-around">
          <div className="font-bold">職業</div>
          <div>{job}</div>
        </li>
      </ul>
      <hr className="mb-4 mx-8 border-1 border-gray-500 " />
      <div className="text-center">
        <div className="font-bold">登録日</div>
        <div className="">{new Date(created_at).toLocaleString('ja-JP')}</div>
      </div>
    </div>
  );
};
