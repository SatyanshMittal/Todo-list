import {z} from "zod"

export const usernameValidation = z
.string()
.min(2, "username can't be of single character" )
.max(20, "username can't exceed 20 characters")
.regex(/^[a-zA-Z0-9_]{3,16}$/, "username can't contain special characters" )

export const signUpSchema = z.object({
    username : usernameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, {message: "password should be atleast of 6 characters"})
})