import { NextResponse } from 'next/server';

let todos = [
  { id: 1, title: 'Learn Ember.js', isCompleted: true },
  { id: 2, title: 'Take a bath', isCompleted: false },
  { id: 3, title: 'Buy Groceries', isCompleted: false },
  { id: 4, title: 'Go to gym', isCompleted: false },
  { id: 5, title: 'Back to work', isCompleted: false },
];

export async function GET() {
  return NextResponse.json({ todos });
}

export async function POST(req) {
  const data = await req.json();

  const newTodo = {
    id: todos.length + 1,
    title: data.title,
    isCompleted: false,
  };

  todos.push(newTodo);

  return NextResponse.json({ todos });
}

export async function DELETE(req) {
  const data = await req.json();

  todos = todos.filter(todo => todo.id !== data.id);

  return NextResponse.json({ todos });
}
