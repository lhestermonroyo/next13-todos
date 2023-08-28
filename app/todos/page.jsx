import DeleteTodo from '@/components/DeleteTodo';
import Link from 'next/link';
import { Suspense } from 'react';

async function TodosPage() {
  const res = await fetch('http://localhost:3000/api/todos', {
    // no revalidation, always fetch from server
    cache: 'no-store',
    // revalidate for 5 seconds
    // next: {
    //   revalidate: 5,
    // },
  });
  const data = await res.json();

  return (
    <section className="mt-24 w-full h-full flex justify-center">
      <table className="min-w-max bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-600 capitalize text-sm leading-normal">
          <tr className="bg-gray-100 text-gray-600 capitalize text-sm leading-normal">
            <th className="py-3 px-6 text-left">Title</th>
            <th className="py-3 px-6 text-left">Completed</th>
            <th className="py-3 px-6 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.todos.map(todo => (
            <tr
              className="border-b border-gray-200 hover:bg-gray-100"
              key={todo.id}
            >
              <td className="py-3 px-6 text-left whitespace-nowrap hover:underline hover:text-blue-500">
                <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
              </td>
              <td className="py-3 px-6 text-left">
                {todo.isCompleted ? 'Yes' : 'No'}
              </td>
              <td className="py-3 px-6 text-left">
                <button
                  type="button"
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded m-2"
                >
                  Complete
                </button>
                <Suspense fallback={<p>Loading button...</p>}>
                  <DeleteTodo id={todo.id} />
                </Suspense>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TodosPage;
