import Image, { StaticImageData } from 'next/image';
import type { User } from '@/app/users/page';
import image1 from '@/images/image1.jpg';
import image2 from '@/images/image2.jpg';
import image3 from '@/images/image3.jpg';
import image4 from '@/images/image4.jpg';
import image5 from '@/images/image5.jpg';
import image6 from '@/images/image6.jpg';
import image7 from '@/images/image7.jpg';
import image8 from '@/images/image8.jpg';

type UserBoxProps = {
  user: User;
};

const colors: {
  [key: string]: string;
} = {
  blue: 'w-full h-40 bg-blue-600',
  red: 'w-full h-40 bg-red-600',
  green: 'w-full h-40 bg-green-600',
  pink: 'w-full h-40 bg-pink-600',
  purple: 'w-full h-40 bg-purple-600',
  emerald: 'w-full h-40 bg-emerald-600',
  orange: 'w-full h-40 bg-orange-600',
  cyan: 'w-full h-40 bg-cyan-600',
};

const icons: {
  [key: string]: StaticImageData;
} = {
  image1: image1,
  image2: image2,
  image3: image3,
  image4: image4,
  image5: image5,
  image6: image6,
  image7: image7,
  image8: image8,
};

export const UserBox = function ({
  user: { name, username, email, address, job, color, icon },
}: UserBoxProps) {
  return (
    <div className="mt-4 bg-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-32 overflow-hidden ">
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
    </div>
  );
};
