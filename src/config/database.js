import mongoose from "mongoose";

const dbUser = '4br4h4mC0v4rrub145'
const dbPassword = '8PbyBw9iOpLuj4oK'

const {
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOSTNAME 
} = process.env

const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}/${DB_NAME}?retryWrites=true&w=majority`

export const DBConn = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
      })
      console.log("Conexion con MongoDB exitosa!!")

  } catch ( error ) {
    console.log("Error al conectarse con MongoDB", error)
  }
}