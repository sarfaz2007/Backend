var users = [];
const getUsers = (req, res) => {
  return res.json(users);
};


const updateUser = (req, res) => {
  const {id} = req.params;
  const user = users.find((user) => user.id == id);
  if(!user){
    return res.status(404).send()
  }
  return res.json();
};


const createUser = (req, res) => {
 const {name, email} = req.body;
 const user = {id: users.length + 1, name,email}
 users.push(user);
 return res. json(user);  
};

const deleteUSer = (req, res) => {
  const {id} = req.params;
  const user = users.find((user) => user.id == id);
  if(!user){
    return res.status(404).send()
  }
  users = users.filter((user) => user.id == id);
  return res.status(204);
};

module.exports = { getUsers, createUser, deleteUSer, updateUser };
