const db = require("../models/databaseModel");
const { getUsernameQuery, getAllDonationsQuery } = require('./queryFunctions/GetQueries.js');
const { makeDonation } = require('./CreateController.js');


class GetControllerBlueprint {
  async getDonationsSum(req, res, next) { //err is only included when our middleware is an error handling middleware and will ONLY run if an error is encountered. Catch blocks introduce a new error object.
    try {
      const allDonations = getAllDonationsQuery();
      const result = await db.query(allDonations); //yields a number
      const donations = result.rows[0].sum;
      res.locals.donations = donations;
    } catch (err) {
      console.log(err);
    };

    next();
  };
  async getLogin(req, res, next) { //runs only when user is logged in.

    const { members } = req.body;
    const { username } = members;
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
  }
}

const GetController = new GetControllerBlueprint();

const getDonationsSum = GetController.getDonationsSum;
const getLogin = GetController.getLogin;

module.exports = {
  getDonationsSum,
  getLogin,
  GetController
}


// dataBaseController.getDonations = (req, res, next) => {
//   const allDonations = 'SELECT sum(amount) FROM donations';
//   db.query(allDonations)
//     .then((data) => {
//       res.locals.donations = data.rows[0].sum;
//       console.log('this is res.locals:', res.locals.donations);
//       return next()
//     })
//     .catch((err) => {
//       next(err);
//     });
// };