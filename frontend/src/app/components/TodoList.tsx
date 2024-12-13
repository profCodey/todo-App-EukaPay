"use client";

import { FC } from "react";
import { Grid2 } from "@mui/material";
import TodoItem from "./TodoItem";
import { useTodoContext } from "../context/TodoContext";

const TodoList: FC = () => {
  const { todos, deleteTodo, updateTodo, isLoading } = useTodoContext();
  console.log(todos);

  const handleToggleStatus = (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "done" ? "unfinished" : "done"; // Toggle the status
    updateTodo(id, { status: newStatus });
  };

  if(isLoading) {
    return (
      <Grid2>
        <h1>Tasks Loading...</h1>
      </Grid2>
    )
  }

  if(todos.length === 0) {
    return (
      <Grid2>
        <h1>Your task list is empty. Please set a task.</h1>
      </Grid2>
    )
  }

  return (
    <Grid2 container spacing={2}>
      {todos.map((todo) => (
        <Grid2 key={todo.id} sx={{ width: "100%" }}>
          <TodoItem
            todo={todo}
            onDelete={() => deleteTodo(todo.id)}
            onToggleStatus={() => handleToggleStatus(todo.id, todo.status)}
          />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default TodoList;
