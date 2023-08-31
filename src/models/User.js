import mongoose from "mongoose";

const { Schema, model } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  avatar: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  }

}, { timestamps: true })

const User = model("users", userSchema)

export default User