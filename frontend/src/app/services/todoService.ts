import { AddTodo, SingleResponse, TodoResponse } from "../types";

import { Todo } from "../types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

if (!BASE_URL) {
  throw new Error("BASE_URL is not defined in the environment variables.");
}

export const fetchTodosAPI = async (): Promise<TodoResponse> => {
  const response = await fetch(`${BASE_URL}/todos`);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return await response.json();
};

export const addTodoAPI = async (todo: AddTodo): Promise<SingleResponse> => {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    throw new Error("Failed to add todo");
  }
  return await response.json();
};

export const updateTodoAPI = async (
  id: string,
  updatedTodo: Partial<Todo>
): Promise<SingleResponse> => {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTodo),
  });
  if (!response.ok) {
    throw new Error("Failed to update todo");
  }
  return await response.json();
};

export const deleteTodoAPI = async (id: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }
};
