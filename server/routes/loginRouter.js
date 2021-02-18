const express = require('express');
const loginRouter = express.Router();
const { authenticateUser } = require('../controllers/authentication/Authentication.js');
const { getUser } = require('../controllers/authentication/Authentication.js');


loginRouter.get("/login", authenticateUser, getUser, (req, res) => {
  res.sendStatus(200).send("Login Successful!"); //render new html?
})


module.exports = loginRouter;
