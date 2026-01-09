const express = require('express')
const { connectdb } =require("./test")
const jwt = require('jsonwebtoken')
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
   connectdb()

app.get("/", (req, res) => {
  return res.send("Hello World")
});

app.post("/login", (req, res) => {
  const {email , password } = req.body;
  const user = users.find((user) => user.email === email && user.password === password);
  if(!user) {
    return res.status(401).json({message:"Invalid username or password"})
  } 
  const token = jwt.sign({id: user.id}, "topsecret");

  return res.json({message: "Login success", token });
});

app.get("/profile", (req, res) => {
  if (!req.headers.authorization){
    return res.status(401).json({message:'No token found'});
  }
   
  const token = req.headers.authorization;
  
  console.log(token);

  return res.send("profile");
})

app.listen(3000, () => {
  console.log("server is running on port 3000")
});

