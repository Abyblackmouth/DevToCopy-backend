import mongoose from "mongoose";

const { Schema, model } = mongoose

const postSchema = new Schema({
  tittle: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  }

}, { timestamps: true })

const Post = model("posts", postSchema)

export default Post