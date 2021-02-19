const db = require("../models/databaseModel");
const { hashCreatePassword, hashCreateCreditCard } = require('./queryFunctions/HashesCreate.js');

class CreateControllerBlueprint {
  async makeDonation(req, res, next) {
    // destructor request body 
    const { donations, members } = req.body;
    console.log("🚀 ~ file: CreateController.js ~ line 8 ~ CreateControllerBlueprint ~ makeDonation ~ donations", donations);
    // test if request would like to add user
    const { username, password } = members;
    if (username && members) {
      const hashedPW = await hashCreatePassword(password);
      const inputUser = `INSERT INTO users (user_name, password) VALUES ($1, $2) RETURNING *`;
      // query DB passing in user_name and password as variables and storing in res.locals

      const result = await db.query(inputUser, [username, hashedPW]);
      console.log(result.rows)
      // (data => res.locals.user = data.rows).catch(err => next(err));

    }
    // post donation to DB

    const usersPKQuery = `SELECT _id FROM users WHERE user_name = '${username}'`;
    const { name, donationAmount, creditCard, phone, date, email } = donations;
    const hashedCard = await hashCreateCreditCard(creditCard);
    const inputDonation = "INSERT INTO donations(name, amount, credit_card, phone_num, date, email, fk_user_id) VALUES ($1, $2, $3, $4, $5, $6, $7)";

    const foreignKeyResult = await db.query(usersPKQuery);
    const foreignKey = foreignKeyResult.rows[0]["_id"];
    await db.query(inputDonation, [name, donationAmount, hashedCard, phone, date, email, foreignKey]);





    const { donations, members } = req.body;
    const { username, password } = members;
    const usersPKQuery = `SELECT _id FROM users WHERE user_name = '${username}'`;
    const foreignKeyResult = await db.query(usersPKQuery);
    const foreignKey = foreignKeyResult.rows[0]["_id"];
    const memberHistoryQuery = `SELECT * FROM donations WHERE fk_user_id=${foreignKey}`;
    const memberHistoryResult = await db.query(memberHistoryQuery);
    console.log("🚀 ~ file: CreateController.js ~ line 33 ~ CreateControllerBlueprint ~ makeDonation ~ memberHistory", memberHistory);
    const donationAmount = memberHistoryResult.rows[0]['amount']
    const donationDate = memberHistoryResult.rows[0]['date']
    const donationInformation = {
      donationAmount,
      donationDate
    }
    next();
    //reference the primary key on the users table to fill in foreign key on the donation table
  }
}
const CreateController = new CreateControllerBlueprint();
const makeDonation = CreateController.makeDonation;

module.exports = {
  makeDonation,
  CreateController,
}