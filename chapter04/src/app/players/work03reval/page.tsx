'use client';

import { revalidateAction } from '@/actions/action';
import { useState } from 'react';

export default async function Page() {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    revalidateAction('/players/work03');
    setText('リバリデーションを実行しました');
  };

  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Revalidation</h1>
      {text && (
        <h2 className="p-4  mx-4 my-2 bg-red-600 text-white font-bod">
          {text}
        </h2>
      )}
      <form action={handleSubmit} className="m-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          リバリデーション実行
        </button>
      </form>
    </div>
  );
}
