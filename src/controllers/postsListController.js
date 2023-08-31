import Post from "../models/Post"

export const getPosts = async ( request, response) =>{
  const posts = await Post.find({})
  response.send(posts)
}

export const getPostById = async ( request, response) => {
  const { id } = request.params
  const post = await Post.findById(id)

  if (!post) {
    response.status(404).send("No existe el post en la base de datos")
  }
  response.status(200).send(post)
}

export const createPosts = async ( request, response ) => {
  try {
    const {tittle, date, content} = request.body
    const newPost = new Post ({
      tittle,
      date,
      content
    })
    await newPost.save()
    response.status(201).send(newPost)

    } catch (error) {
      response.status(422).send({ error: error.message })
  }
}

export const updatePostById = async ( request, response ) => {
  const { id } = request.params
  const { tittle, date, content } = request.body
  const post = await Post.findOneAndUpdate(
    {_id: id}, 
    { tittle, date, content},
    {returnOriginal: false})
  response.send({message: 'Se actualizo el usuario' , data: post}) 
}

export const deletePostById = async ( request, response ) => {
  const { id } = request.params

    try {
      const post = await Post.findByIdAndDelete(id)

      if(!post){
        response.status(404).send({message: "Ya no existe el usuario en la base de datos"})
      }
      response.status(200).send({message: "Se elimino el usuario correctamente"})

    } catch ( error ) {
      console.log( error.message)
      response.status(422).send({error: error.message})
    }
}