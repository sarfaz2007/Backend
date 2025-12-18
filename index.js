const express = require('express')
const morgan = require('morgan')

const app = express();

app.use(express.json());

app.use(morgan("tiny"))

app.get("/", (req, res) => {
  return res.send("Hello World")
});

app.use("/users", require("./routers/users.router"));

app.listen(3000, () => {
  console.log("server is running on port 3000")
});

