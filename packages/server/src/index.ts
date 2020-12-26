import { IndexRes } from "@vue-express-todos/common";
import express, { Request, Response } from "express";
import logger from "./middleware/logger";
import cors from "cors";
import TodoController from "./controllers/Todo.controller";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(logger);

app.get("/", (_req: Request, res: Response<IndexRes>) => {
  res.json({ message: "Hello, world!" });
});

app.use(TodoController);

const PORT = process.env.PORT ?? "3001";
const DATABASE_URL =
  process.env.DATABASE_URI ?? "mongodb://localhost:27017/vueexpresstodos_dev";

app.listen(PORT, async () => {
  mongoose
    .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to database"))
    .catch((err) => {
      console.error(err);
      process.exit(-1);
    });
  console.log(`Listening on port ${PORT}`);
});
