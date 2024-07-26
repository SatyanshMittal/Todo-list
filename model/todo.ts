import mongoose, {Schema, Document} from "mongoose"
import { number } from "zod";

export interface Todo extends Document {
    globalList : string;
    normalList :string;
}

const SimpleTodo : Schema<Todo> = new Schema ({
    normalList: {
        type: String 
    },
    globalList: {
        type: String, 
    },
})

export const TodoModel = (mongoose.models.Todo as mongoose.Model<Todo>) || mongoose.model<Todo>("Todo", SimpleTodo)