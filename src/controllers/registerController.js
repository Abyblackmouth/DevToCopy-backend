import bcrypt from "bcrypt"
import User from "../models/User"

export const register = async (request, response) =>{

    const {name, lastName, email, user, password} = request.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User ({
        name,
        lastName,
        email,
        user,
        password: hashedPassword
    })
    await newUser.save()
    console.log(newUser)

    response.status(201).send(newUser)

}