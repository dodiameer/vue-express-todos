import { ITodo } from "@vue-express-todos/common";
import { TodoDocument } from "./Todo.model";

export default async function updateTodo(dbEntry: TodoDocument, newData: ITodo) {
  dbEntry.title = newData.title ?? dbEntry.title;
  dbEntry.description = newData.description ?? dbEntry.description;
  dbEntry.isComplete = newData.isComplete ?? dbEntry.isComplete;
  await dbEntry.save()
}