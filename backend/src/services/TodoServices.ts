import { Todo } from '../models/Todo.js';
import { FileSystem } from '../utils/FileSystem.js';
import { v4 as uuidv4 } from 'uuid';

export class TodoService {
    static async getAllTodos(): Promise<Todo[]> {
        return FileSystem.readData();
    }

    static async createTodo(content: string, dueDate?: string): Promise<Todo> {
        const todos = await FileSystem.readData();
        const newTodo: Todo = {
            id: uuidv4(),
            content,
            dueDate,
            status: 'Unfinished',
        };
        todos.push(newTodo);
        await FileSystem.writeData(todos);
        return newTodo;
    }

    static async updateTodo(id: string, updatedData: Partial<Todo>): Promise<Todo | null> {
        const todos = await FileSystem.readData();
        const todoIndex = todos.findIndex((todo: Todo) => todo.id === id);

        if (todoIndex === -1) return null;

        todos[todoIndex] = { ...todos[todoIndex], ...updatedData };
        await FileSystem.writeData(todos);
        return todos[todoIndex];
    }

    static async deleteTodo(id: string): Promise<boolean> {
        const todos = await FileSystem.readData();
        const filteredTodos = todos.filter((todo: Todo) => todo.id !== id);

        if (todos.length === filteredTodos.length) return false;

        await FileSystem.writeData(filteredTodos);
        return true;
    }
}
