const common = require("@monorepo/common")
const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  // Example usage of common function
  common()
  res.json({ message: "Hello from server" })
})

app.listen(process.env.PORT)