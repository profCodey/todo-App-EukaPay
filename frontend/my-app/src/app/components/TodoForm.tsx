"use client";

import { FC, useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useTodoContext } from '../context/TodoContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from '../utils/notification';

interface TodoFormProps {
  initialData?: { content: string; dueDate?: string };
  id?: string;
}

const TodoForm: FC<TodoFormProps> = ({ initialData, id }) => {
  const { addTodo } = useTodoContext();
  const [content, setContent] = useState(initialData?.content || '');
  const [dueDate, setDueDate] = useState(initialData?.dueDate || '');
  const router = useRouter();


  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('got here');
    if (content === '') {
        console.log('got here2')
        notify('Please enter a task', 'error');
        return;
    }
    const newTodo = { content, dueDate, status: 'unfinished' };
   await addTodo(newTodo);
    notify('Please enter a task', 'error');
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
         <ToastContainer />
      <Box sx={{ display: 'flex', marginTop: '20px', width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Box sx={{ display: 'flex' }}>
            <TextField
              label="Add Item"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              fullWidth
              InputProps={{
                style: { height: '70px', fontSize: '18px', paddingBottom: '10px' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#1D3557', // Default border color
                  },
                  '&:hover fieldset': {
                    borderColor: '#1D3557', // Hover border color
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1D3557', // Focused border color
                  },
                },
              }}
            />
            <Button variant="contained" type="submit" sx={{background: '#1D3557'}}>Add</Button>
          </Box>

          <TextField
            label="Due Date"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
              style: { fontSize: '14px', fontWeight: 'bold' },
            }}
            sx={{
              width: '200px',
              marginTop: '-10px',
              '& .MuiOutlinedInput-root': {
                border: 'none',
                '& fieldset': {
                  border: 'none',
                },
              },
              '& .MuiInputBase-input': {
                paddingLeft: '70px',
                marginTop: '-45px',
                fontSize: '15px',
              },
            }}
            InputProps={{
              style: { height: '40px' },
            }}
          />
        </Box>
      </Box>
    </form>
  );
};

export default TodoForm;
