const express = require('express');
const { getUsers, createUser, deleteUSer } = require('../controllers/users.controller');

const router = express.Router();



router.get("/",require("../middlewares/logger.middleware"), getUsers);

// router.get("/:id", getUser);

router.post("/", createUser);

router.delete("/:id", deleteUSer);


router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id)

  return res.send("users");
});

router.get("/", (req, res) => res.send('users route'));

router.get("/:id", (req, res) => res.send('user # route'));

module.exports = router;
