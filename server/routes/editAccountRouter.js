const express = require('express');
const editAccountRouter = express.Router();
const { changePassword, changeUsername } = require('../controllers/UpdateController.js')


editAccountRouter.patch("/changeUsername",
  changeUsername,
  (req, res) => {
    res.sendStatus(200);
  });
editAccountRouter.patch("/changePassword",
  changePassword,
  (req, res) => {
    res.sendStatus(200);
  });


module.exports = editAccountRouter;