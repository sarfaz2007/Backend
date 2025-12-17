const express = require('express')

const app = express();

app.use(express.json());



app.get("/", (req, res) => {
  return res.send("GET")
})




app.listen(3000, () => {
  console.log("server is running on port 3000")
})

