import { ITodo } from "@vue-express-todos/common";
import { TodoDocument } from "../models/Todo.model"

export default function mapTodo(todo: TodoDocument): ITodo {
  const { id, title, description, isComplete, updatedAt, createdAt } = todo
  return {
    id,
    title,
    description,
    isComplete,
    createdAt,
    updatedAt
  }
}