import mongoose , {Schema, Document} from "mongoose";

export interface User extends Document {
    username: string;
    email: string;
    createdAt: Date;
    password: string;
    taskNormal: [];
    taskDay: [];
    
}

const UserSchema:  Schema<User> = new Schema({
    username: {
        type: String, 
        required: [true, "Username is required"],
        unique: true,
        trim: true,
    },

    email: {
        type: String, 
        required: [true, "Email is required"],
        unique: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "please use a valid email address"]
    },
    password: {
        type: String, 
        required: [true, "password is required" ],
    }
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);