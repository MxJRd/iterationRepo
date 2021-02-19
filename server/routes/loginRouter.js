const express = require('express');
const loginRouter = express.Router();
const { authenticateUser } = require('../controllers/authentication/Authentication.js');
const { getUser } = require('../controllers/authentication/Authentication.js');
const { getLogin } = require('../controllers/GetController.js')

loginRouter.get("/authenticate", authenticateUser, (req, res) => {
  res.sendStatus(200).json({ "login": "successful" }); //render new html?
})


module.exports = loginRouter;
