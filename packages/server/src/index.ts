import { IndexRes } from "@vue-express-todos/common"
import express, { Request, Response } from "express"
import logger from "./middleware/logger"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors({ origin: "*" }))
app.use(logger)

app.get("/", (_req: Request, res: Response<IndexRes>) => {
  res.json({message: "Hello, world!"})
})

const PORT = process.env.PORT ?? "3001"
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))