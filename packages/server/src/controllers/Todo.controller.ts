import { ITodo } from "@vue-express-todos/common";
import express, { Request as Req, Response as Res } from "express";
import mapTodo from "../models/Todo.map";
import TodoModel, { TodoDocument } from "../models/Todo.model";

const TodoController = express.Router();

TodoController.get("/api/todos", async (_req: Req, res: Res) => {
  const todos = await TodoModel.find();
  const mapped = todos.map(mapTodo);
  return res.json(mapped);
});

TodoController.get(
  "/api/todos/:id",
  async (req: Req<{ id: TodoDocument["_id"] }>, res: Res) => {
    const todo = await TodoModel.findById(req.params.id);
    if (todo === null) {
      return res.status(404);
    }
    res.json(mapTodo(todo));
  }
);

TodoController.post(
  "/api/todos",
  async (req: Req<{}, {}, ITodo>, res: Res<ITodo>) => {
    const { id, updatedAt, createdAt, ...cleanedTodo } = req.body;
    const todoDocument = new TodoModel(cleanedTodo);
    todoDocument
      .save()
      .then((document) => {
        return res.status(201).json(mapTodo(document));
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  }
);

TodoController.delete(
  "/api/todos/:id",
  async (req: Req<{ id: TodoDocument["id"] }>, res: Res) => {
    const { id } = req.params;
    TodoModel.findByIdAndRemove(id, { useFindAndModify: false })
      .then(() => {
        return res.status(200).json({ success: true });
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  }
);

export default TodoController;
