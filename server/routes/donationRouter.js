const express = require('express');
const donationRouter = express.Router();
const { makeDonation } = require('../controllers/CreateController.js')

donationRouter.post("/makeDonation",
  makeDonation,
  (req, res) => {
    res.sendStatus(200);
  });


module.exports = donationRouter;