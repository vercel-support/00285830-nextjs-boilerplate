export const dynamic = 'force-dynamic';

async function getData() {
  const url =
    process.env.NEXT_PUBLIC_ENV === 'stage'
      ? 'https://jsonplaceholder.org/posts'
      : 'https://jsonplaceholder.typicode.com/posts';
  const res = await fetch(url).then((res) => res.json());
  return res;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>
    </div>
  );
}
