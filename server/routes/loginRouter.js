const express = require('express');
const loginRouter = express.Router();
const { authenticateUser } = require('../controllers/authentication/Authentication.js');
// const { getUser } = require('../controllers/authentication/Authentication.js');
const { getLogin } = require('../controllers/GetController.js')

loginRouter.post("/authenticate", authenticateUser, getLogin,(req, res) => {
  res.status(200) //render new html?
})


module.exports = loginRouter;
