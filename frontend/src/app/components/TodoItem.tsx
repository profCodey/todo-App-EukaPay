"use client";

import { FC, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Checkbox,
  IconButton,
  Box,
  Tooltip,
} from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import { Todo } from "../types/index";
import EditModal from "../pages/EditModal";

interface TodoItemProps {
  todo: Todo;
  onDelete: () => void;
  onToggleStatus: () => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, onDelete, onToggleStatus }) => {
  const [open, setOpen] = useState(false);
  return (
    <Card sx={{ background: "#9f8d6b" }}>
      <EditModal open={open} setOpen={setOpen} todo={todo} />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Checkbox
            checked={todo.status === "done"}
            onChange={onToggleStatus}
            sx={{
              color: "#1D3557",
              "&.Mui-checked": {
                color: "#1D3557",
              },
            }}
          />
          <Box sx={{ marginLeft: 2 }}>
            <Typography variant="h6">{todo.content}</Typography>
            <Typography variant="body2" color="textSecondary">
              Due Date: {todo.dueDate ? todo.dueDate : "Not Added"}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Tooltip title="Edit" arrow>
            <IconButton onClick={() => setOpen(true)}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete" arrow>
            <IconButton onClick={onDelete} sx={{ color: "#FF0100" }}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
