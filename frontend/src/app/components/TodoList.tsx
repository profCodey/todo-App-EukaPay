"use client";

import { FC } from "react";
import { Grid2 } from "@mui/material";
import TodoItem from "./TodoItem";
import { useTodoContext } from "../context/TodoContext";

const TodoList: FC = () => {
  const { todos, deleteTodo, updateTodo } = useTodoContext();
  console.log(todos);

  const handleToggleStatus = (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "done" ? "unfinished" : "done"; // Toggle the status
    updateTodo(id, { status: newStatus });
  };

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
