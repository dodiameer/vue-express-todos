//@ts-nocheck
import { Schema } from "mongoose"

function timestamp(schema: Schema) {
  schema.add({
    createdAt: Date,
    updatedAt: Date
  })

  schema.pre("save", function(next) {
    const now = new Date(Date.now())
    this.updatedAt = now
  
    if (!this.createdAt) {
      this.createdAt = now
    }
  
    next()
  })
}

export default timestamp