var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { TodoService } from '../services/TodoServices';
export class TodoController {
    static getAllTodos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todos = yield TodoService.getAllTodos();
                return res.json(todos);
            }
            catch (error) {
                return res.status(500).json({ message: 'Error fetching todos.', error });
            }
        });
    }
    static createTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { content, dueDate } = req.body;
            if (!content) {
                return res.status(400).json({ message: 'Content is required.' });
            }
            try {
                const newTodo = yield TodoService.createTodo(content, dueDate);
                return res.status(201).json(newTodo);
            }
            catch (error) {
                return res.status(500).json({ message: 'Failed to create todo.', error });
            }
        });
    }
    static updateTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const updatedTodo = yield TodoService.updateTodo(id, req.body);
                if (!updatedTodo) {
                    return res.status(404).json({ message: 'Todo not found.' });
                }
                return res.json(updatedTodo);
            }
            catch (error) {
                return res.status(500).json({ message: 'Failed to update todo.', error });
            }
        });
    }
    static deleteTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const success = yield TodoService.deleteTodo(id);
                if (!success) {
                    return res.status(404).json({ message: 'Todo not found.' });
                }
                return res.status(204).send();
            }
            catch (error) {
                return res.status(500).json({ message: 'Failed to delete todo.', error });
            }
        });
    }
}
