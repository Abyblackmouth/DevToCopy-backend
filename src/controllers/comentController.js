import Coment from "../models/Coments";
import Post from "../models/Post";
import User from "../models/User";

export const getComents = async ( request, response ) => {
    const { id } = request.params
    const coments = await Coment.findById(id).populate("posts")
    if (!coments) {
        response.status(404).send({ message: "Us, no existen comentarios aun, Se el primero"})
        return
    }
    response.status(200).send(coments)

}