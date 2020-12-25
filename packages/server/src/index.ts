import { IndexRes } from "@vue-express-todos/common"
import express, { Request, Response } from "express"
import logger from "./middleware/logger"

const app = express()
app.use(express.json())
app.use(logger)

app.get("/", (_req: Request, res: Response<IndexRes>) => {
  res.json({message: "Hello, world!"})
})

const PORT = process.env.PORT ?? "3001"
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))