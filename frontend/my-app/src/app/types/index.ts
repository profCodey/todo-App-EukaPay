export interface Todo {
    id: string;
    content: string;
    dueDate?: string;
    status: 'unfinished' | 'done';
  }
  

  export interface TodoResponse {
    data: Todo[];
     message: string;
  }

  export interface AddTodo {
    content: string;
    dueDate?: string;
    status: string;
  }

  export interface SingleResponse {
    data: Todo;
     message: string;
  }
