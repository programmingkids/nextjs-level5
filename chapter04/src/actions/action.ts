'use server';

import { revalidatePath } from 'next/cache';

// 引数で指定されたURLのキャッシュを削除する
export const revalidateAction = async (path: string) => {
  revalidatePath(path);
};
