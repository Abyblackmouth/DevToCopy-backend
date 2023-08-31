import { Router } from "express";
import { getUsers, newTodoUsers, getUserById, updateUserById, deleteUserById } from "../controllers/userListController";

const todoUserRouter = Router()

todoUserRouter.route('/users')
  .get(getUsers)
  .post(newTodoUsers)

todoUserRouter.route('/users/:id')
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById)


export default todoUserRouter