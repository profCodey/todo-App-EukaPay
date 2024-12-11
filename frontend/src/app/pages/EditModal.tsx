import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Todo } from "../types/index";
import { useTodoContext } from "../context/TodoContext";

import { Checkbox, Box, TextField, Typography } from "@mui/material";
import { notify } from "../utils/notification";

const styled = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface EditModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  todo: Todo;
}

export default function EditModal({ open, setOpen, todo }: EditModalProps) {
  const { updateTodo } = useTodoContext();
  const handleClose = () => {
    setOpen(false);
    setContent(todo.content);
    setDueDate(todo.dueDate);
  };
  const [checked, setChecked] = useState(todo.status === "done");
  const [content, setContent] = useState(todo?.content);
  const [dueDate, setDueDate] = useState(todo?.dueDate);
  const [status, setStatus] = useState(todo?.status);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (content === "") {
      notify("Please enter a task", "error");
      return;
    }
    updateTodo(todo.id, {
      content,
      dueDate,
      status: checked ? "done" : "unfinished",
    });
    handleClose();
  };

  useEffect(() => {
    setChecked(todo.status === "done");
  }, [todo.status]);
  
  const handleChange = () => {
    const newStatus = !checked ? "done" : "unfinished";
    setChecked(!checked);
    setStatus(checked ? "done" : "unfinished");
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styled}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", marginTop: "20px", width: "100%" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <Box>
                  <TextField
                    label="Add Item"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    fullWidth
                    multiline
                    required
                    maxRows={10}
                    InputProps={{
                      style: { fontSize: "16px", paddingBottom: "10px" },
                    }}
                  />
                </Box>

                <TextField
                  label="Due Date"
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                    style: { fontSize: "14px" },
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
                gap: "10px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                />{" "}
                <Typography sx={{ fontSize: "12px" }}>Completed</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Button
                  sx={{
                    backgroundColor: "red",
                    "&:hover": { backgroundColor: "darkred" },
                  }}
                  variant="contained"
                  type="submit"
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  sx={{ background: "#1D3557" }}
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
