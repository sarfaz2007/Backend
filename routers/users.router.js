const express = require('express');
const router = express.Router();

const userRouter = require('./routers/users.router');
var users = [];


app.get("/", (req,res) => {
    return res.send("hello world");
})

app.use('/users', )

router.get("/", (req, res) => {
  return res.json(users);
});

router.get("/:id", (req, res) => {
  const {id} = req.params;
  const user = users.find((user) => user.id == id);
  if(!user){
    return res.status(404).send()
  }
  return res.json();
});

router.post("/", (req, res) => {
 const {name, email} = req.body;
 const user = {id: users.length + 1, name,email}
 users.push(user);
 return res. json(user);  
});

router.delete("/:id", (req, res) => {
  const {id} = req.params;
  const user = users.find((user) => user.id == id);
  if(!user){
    return res.status(404).send()
  }
  users = users.filter((user) => user.id == id);
  return res.status(204);
});


router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id)

  return res.send("users");
});

router.get("/", (req, res) => res.send('users route'));

router.get("/:id", (req, res) => res.send('user # route'));

module.exports = router;
