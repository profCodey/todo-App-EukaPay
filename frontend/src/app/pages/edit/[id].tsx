"use client";

import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TodoForm from '../../components/TodoForm';
import { useTodoContext } from '@/app/context/TodoContext';

const EditPage: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { todos } = useTodoContext();
  const [initialData, setInitialData] = useState<{ content: string; dueDate?: string } | null>(null);

  useEffect(() => {
    if (id) {
      const todo = todos?.find(todo => todo.id === id);
      if (todo) {
        setInitialData({ content: todo.content, dueDate: todo.dueDate });
      }
    }
  }, [id, todos]);

  if (!initialData) return <div>Loading...</div>;

  return <TodoForm initialData={initialData} id={id as string} />;
};

export default EditPage;
