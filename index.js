const express = require('express')
const app = express();

const users = [
  {
    id: 1,
    name : 'alex',
    email : 'alex@gmail.com',
    password :'123'
  },
  {
    id: 2,
    name : 'joe',
    email : 'joe@gmail.com',
    password :'456'
  }
]

app.use(express.json());
  
app.get("/", (req, res) => {
  return res.send("Hello World")
});

app.post("/login", (req, res) => {
  const {email , password } = req.body;
  const user = users.find((user) => user.email === email && user.password === password);
  if(!user) {
    return res.status(401).json({message:"Invalid username or password"})
  }
  return res.send("Login Success")
});

app.get("/profile", (req, res) => {
  return res.send("profile");
})

app.listen(3000, () => {
  console.log("server is running on port 3000")
});

