const bcrypt = require('bcrypt');
const db = require("../../models/databaseModel");
const { getUsernameQuery } = require('../queryFunctions/GetQueries.js');

class AuthenticationBlueprint {
  async authenticateUser(req, res, next) {
    const { username, password } = req.body; //getting info from login form
    const userQueryStr = getUsernameQuery(username); //`SELECT * FROM users WHERE user_name = ${username}`
    const userQueryResult = await db.query(userQueryStr); //has username and password
    // console.log("🚀 ~ file: Authentication.js ~ line 14 ~ AuthenticationBlueprint ~ authenticateUser ~ userQueryResult", userQueryResult)
    // const passwordQueryResult = db.query(passwordQueryStr);


    const hashedPW = userQueryResult.rows[0]['password'];
    const loggedIn = await bcrypt.compare(password, hashedPW);

    // const hashedPW = passwordQueryResult.rows[1]['password'];
    // const pass
    if (loggedIn) {
      // Send them to a members page
      console.log("Successfully logged in")
      next();
    } else {
      throw "User credentials are incorrect.";
    }
    next();
  }
}

const Authentication = new AuthenticationBlueprint();
const authenticateUser = Authentication.authenticateUser;

module.exports = {
  authenticateUser
}