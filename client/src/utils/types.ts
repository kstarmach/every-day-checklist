export interface NewTodo {
    text: string;
    done: boolean;
}

export interface UpdateTodo extends NewTodo {
    id: string;
}

export interface Todo extends NewTodo {
    id: string;
    order?: number;
    updateDate?: Date;
    createDate: Date;
}

export interface ListProps {
    todos: Todo[];
    updateTodo: (values: UpdateTodo) => void;
    deleteTodo: (id: string ) => void;
}

export interface SingleTodo extends Omit<ListProps, "todos"> {
    todo: Todo
}