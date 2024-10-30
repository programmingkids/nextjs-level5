'use client';

import { useEffect } from 'react';

type ErrorProps = {
  error: Error;
};

export default function Error({ error }: ErrorProps) {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);

  return (
    <div className="main p-8">
      <div className="text-lg text-red-600 font-bold">
        エラー：データ取得失敗
      </div>
    </div>
  );
}
