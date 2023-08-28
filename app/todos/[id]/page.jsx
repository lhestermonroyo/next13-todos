export async function generateStaticParams() {
  return [
    {
      id: 'one',
    },
    {
      id: 'two',
    },
    {
      id: 'three',
    },
  ];
}

function TodoItem({ params }) {
  return <div>Params: {params.id}</div>;
}

export default TodoItem;
