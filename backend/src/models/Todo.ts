export interface Todo {
    id: string;
    content: string;
    dueDate?: string; 
    status: 'Unfinished' | 'Done';
}
