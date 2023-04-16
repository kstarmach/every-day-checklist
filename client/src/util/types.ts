export interface NewTodo {
    text: string;
    done: boolean;
}

export interface Todo extends NewTodo {
    id: string;
    order?: number;
    updateDate?: Date;
    createDate: Date;
}

export interface ListProps {
    todos: Todo[];
    updateTodo: (values: { id: string; text: string; done: boolean }) => void;
    deleteTodo: (values: { id: string }) => void;
}