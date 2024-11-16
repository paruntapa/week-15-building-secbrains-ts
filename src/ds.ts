import { model, Schema } from "mongoose";
import mongoose, { mongo } from "mongoose";

mongoose.connect("")

const UserSchema = new Schema({
    username: {type: String, unique: true },
    password: {type: String}
})

const ContentSchema = new Schema ({
    title: String,
    link: String,
    tag: [{type: mongoose.Types.ObjectId, ref: "Tag"}],
    userId: {type: mongoose.Types.ObjectId, ref: "User", required: true}
})
export const UserModel = model( "User", UserSchema );
