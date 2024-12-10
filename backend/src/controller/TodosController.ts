import { Request, Response } from 'express';
import { TodoService } from '../services/TodoServices';

export class TodoController {
    static async getAllTodos(req: Request, res: Response): Promise<void> {
        try {
            const todos = await TodoService.getAllTodos();
            res.json({
                message: 'Successfully fetched all Todos.',
                data: todos});
        } catch (error) {
            res.status(500).json({ message: 'Failed to get todos.' });
        }
    }

    static async createTodo(req: Request, res: Response): Promise<void> {
        const { content, dueDate } = req.body;
        if (!content) {
            res.status(400).json({ message: 'Content is required.' });
            return;
        }
        try {
            const newTodo = await TodoService.createTodo(content, dueDate);
            res.status(201).json({
                message: 'Todo created successfully.',
                data: newTodo});
            return;
        } catch (error) {
            res.status(500).json({ message: 'Failed to create todo.' });
            return;
        }
    }

    static async updateTodo(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const updatedTodo = await TodoService.updateTodo(id, req.body);
            if (!updatedTodo) {
                res.status(404).json({ message: 'Todo not found.' });
                return;
            }
            res.json({
                message: 'Todo updated successfully.',
                data: updatedTodo});
        } catch (error) {
            res.status(500).json({ message: 'Failed to update todo.' });
        }
    }

    static async deleteTodo(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const success = await TodoService.deleteTodo(id);
            if (!success) {
                res.status(404).json({ message: 'Todo not found.' });
                return;
            }
            res.status(204).json({
                message: 'Todo deleted successfully.',
            });
        } catch (error) {
            res.status(500).json({ message: 'Failed to delete todo.' });
        }
    }
}
