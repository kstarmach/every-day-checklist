import { ObjectId } from "mongoose";

export interface Todo {
    id: string;
    text: string;
    done: boolean;
    order?: number;
    updateDate?: Date;
    createDate: Date;
}

export interface TodoDocument extends Todo {
    _id?: ObjectId;
    __v?: string
}


export type NewTodo =
    | Omit<Todo, "id">;
