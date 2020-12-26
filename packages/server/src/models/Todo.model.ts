import mongoose, { Schema, Document } from "mongoose"
import { ITodo } from "@vue-express-todos/common"
import timestamp from "../../plugins/timestamp"

export interface TodoDocument extends Document, ITodo {}

const TodoSchema: Schema<TodoDocument> = new Schema<TodoDocument>({
  title: { type: String, required: true },
  description: { type: String, required: false },
  isComplete: { type: Boolean, required: true, default: false },
})

TodoSchema.plugin(timestamp)

export default mongoose.model<TodoDocument>("Todo", TodoSchema)