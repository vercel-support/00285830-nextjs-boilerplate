'use server';

import { unstable_cache } from 'next/cache';

export async function getData() {
  const url =
    process.env.NEXT_PUBLIC_ENV === 'stage'
      ? 'https://jsonplaceholder.org/posts'
      : 'https://jsonplaceholder.typicode.com/posts';
  const res = await fetch(url).then((res) => res.json());
  return res;
}

export async function getCachedData() {
  const data = unstable_cache(() => getData());
  return data();
}
