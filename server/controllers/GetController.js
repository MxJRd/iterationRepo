const db = require("../models/databaseModel");
const { getUsernameQuery, getAllDonationsQuery } = require('./queryFunctions/GetQueries.js');


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