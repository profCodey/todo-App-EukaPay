var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { FileSystem } from '../utils/FileSystem';
import { v4 as uuidv4 } from 'uuid';
export class TodoService {
    static getAllTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            return FileSystem.readData();
        });
    }
    static createTodo(content, dueDate) {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = yield FileSystem.readData();
            const newTodo = {
                id: uuidv4(),
                content,
                dueDate,
                status: 'Unfinished',
            };
            todos.push(newTodo);
            yield FileSystem.writeData(todos);
            return newTodo;
        });
    }
    static updateTodo(id, updatedData) {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = yield FileSystem.readData();
            const todoIndex = todos.findIndex((todo) => todo.id === id);
            if (todoIndex === -1)
                return null;
            todos[todoIndex] = Object.assign(Object.assign({}, todos[todoIndex]), updatedData);
            yield FileSystem.writeData(todos);
            return todos[todoIndex];
        });
    }
    static deleteTodo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = yield FileSystem.readData();
            const filteredTodos = todos.filter((todo) => todo.id !== id);
            if (todos.length === filteredTodos.length)
                return false;
            yield FileSystem.writeData(filteredTodos);
            return true;
        });
    }
}
