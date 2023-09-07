import mongoose from "mongoose";

const { Schema, model } = mongoose

const comentsSchema = new Schema({
    coment: {
        type: String
    }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
      },
},{ timestamps: true } )

const Coment = model("coments", comentsSchema)

export default Coment