const db = require("../models/databaseModel");
const { hashCreatePassword, hashCreateCreditCard } = require('./queryFunctions/HashesCreate.js');
 
class CreateControllerBlueprint {
  async makeDonation(req, res, next) {
    // destructor request body 
    const { donations, members } = req.body;
    console.log("🚀 ~ file: CreateController.js ~ line 8 ~ CreateControllerBlueprint ~ makeDonation ~ donations", donations);
    // test if request would like to add user
    if (members.username && members.password) {
      const { username, password } = members;
      const hashedPW = await hashCreatePassword(password);
      const inputUser = `INSERT INTO users (user_name, password) VALUES ($1, $2) RETURNING *`;
      // query DB passing in user_name and password as variables and storing in res.locals

      const userCreateResult = await db.query(inputUser, [username, hashedPW]);
      // console.log("result rows", result.rows)
      // (data => res.locals.user = data.rows).catch(err => next(err));
    }
    // post donation to DB

    const { name, donationAmount, creditCard, phone, date, email } = donations;
    const hashedCard = await hashCreateCreditCard(creditCard);
    const inputDonation = "INSERT INTO donations(name, amount, credit_card, phone_num, date, email) VALUES ($1, $2, $3, $4, $5, $6)";
    const creditCardCreateResult = await db.query(inputDonation, [name, donationAmount, hashedCard, phone, date, email]);
    next();
  }
}

const CreateController = new CreateControllerBlueprint();
const makeDonation = CreateController.makeDonation;

module.exports = {
  makeDonation,
  CreateController,
}