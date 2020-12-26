import { TodoDocument } from "@vue-express-todos/server/src/models/Todo.model"

export default interface ITodo {
  id?: TodoDocument["id"]
  title: string,
  description?: string,
  isComplete: boolean,
  createdAt: Date,
  updatedAt: Date
}