'use client';

import { useRouter } from 'next/navigation';

async function DeleteTodo({ id }) {
  const router = useRouter();

  await new Promise(resolve => setTimeout(resolve, 3000));

  async function handleDelete() {
    const res = await fetch(`http://localhost:3000/api/todos`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    });

    if (res.ok) {
      router.refresh();
      router.push('/');
    } else {
      throw new Error(await res.text());
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded"
    >
      Delete
    </button>
  );
}

export default DeleteTodo;
