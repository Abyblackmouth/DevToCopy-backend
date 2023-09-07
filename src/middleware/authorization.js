import { jwt } from "jsonwebtoken";

const { JWT_SECRET} = process.env

export const authorizationMiddleware = async (request, response, next) => {

  try {
    const {authorization} = request.headers

    const token = authorization.split(' ')[1]
    
    const verifedUser = await jwt.verify(token, JWT_SECRET)
    
    request.user = verifedUser
    
    next()

  } catch ( error ) {
		response.status(401).send({ error: "Usuario no autorizado"})
  }

}