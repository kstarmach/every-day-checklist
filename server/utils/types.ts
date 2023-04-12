import { ObjectId } from "mongoose";

export interface Todo {
    id: string;
    text: string;
    done: boolean;
    createDate: Date;
    order?: number;
    updateDate?: Date;
}

export interface TodoDocument extends Todo {
    _id?: ObjectId;
    __v?: string
}
