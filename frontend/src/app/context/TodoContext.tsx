"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import {
  fetchTodosAPI,
  addTodoAPI,
  updateTodoAPI,
  deleteTodoAPI,
} from '../services/todoService';
import { Todo, AddTodo } from '../types';


interface TodoContextType {
  todos: Todo[];
  fetchTodos: () => Promise<void>;
  addTodo: (todo: AddTodo) => Promise<void>;
  updateTodo: (id: string, updatedTodo: Partial<Todo>) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  isLoading: boolean;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchTodos = async () => {
    try {
      setIsLoading(true);
      const { data } = await fetchTodosAPI();
      setTodos(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const addTodo = async (todo:AddTodo) => {
    try {
      setIsLoading(true);
      const newTodoResponse = await addTodoAPI(todo);
      let newTodo = newTodoResponse.data
      setTodos((prev) => [...prev, newTodo]);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const updateTodo = useCallback(async (id: string, updatedTodo: Partial<Todo>) => {
    try {
      setIsLoading(true);
      const updated = await updateTodoAPI(id, updatedTodo);
      console.log('updated', updated);
      setTodos((prev) => prev.map((todo) => (todo.id === id ? updated.data : todo)));
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const deleteTodo = useCallback(async (id: string) => {
    try {
      setIsLoading(true);
      await deleteTodoAPI(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);
  
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, fetchTodos, addTodo, updateTodo, deleteTodo, isLoading }}>
      {children}
    </TodoContext.Provider>
  );
};
