import mongoose from "mongoose";

const { Schema, model } = mongoose

const comentsSchema = new Schema({
    comentario: {
        type: String
    }, 
    postsId: {
        type: Schema.Types.ObjectId,
        ref: 'posts',
        required: true
      }
},{ timestamps: true } )

const Coment = model("coments", comentsSchema)

export default Coment