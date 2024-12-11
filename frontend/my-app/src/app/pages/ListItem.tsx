"use client";
import { FC } from 'react';
import TodoList from '../components/TodoList';
import { TodoProvider } from '../context/TodoContext';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import TodoForm from '../components/TodoForm';

const HomePage: FC = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw'}}>
      <Box sx={{maxWidth:'700px', mx:'50px'}}>
        <Typography sx={{fontSize: '50px', fontWeight:600, textAlign: 'center'}}>Euka Pay Task Tracker</Typography>
        <TodoProvider>
            <TodoForm />
            <TodoList />
        </TodoProvider>
      </Box>
    </Box>
  );
};

export default HomePage;
