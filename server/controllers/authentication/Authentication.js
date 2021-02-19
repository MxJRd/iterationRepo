const bcrypt = require('bcrypt');
const { getUsernameQuery } = require('../queryFunctions/GetQueries.js');

class AuthenticationBlueprint {
  async authenticateUser(req, res, next) {
    const { username, password } = req.body; //getting info from login form

    const userQueryStr = getUsernameQuery(username); //`SELECT * FROM users WHERE user_name = ${username}`
    // const passwordQueryStr = getPasswordQuery(password); // `SELECT password FROM users WHERE password = ${password}`;

    const userQueryResult = db.query(userQueryStr); //has username and password
    // const passwordQueryResult = db.query(passwordQueryStr);


    const userResult = userQueryResult.rows;
    // const hashedPW = userQueryResult.rows[1]['password'];
    const loggedIn = await bcrypt.compare(password, hashedPW);
    console.log("🚀 ~ file: Authentication.js ~ line 20 ~ AuthenticationBlueprint ~ authenticateUser ~ usernameFound", userResult);

    // const hashedPW = passwordQueryResult.rows[1]['password'];
    // const pass
    if (username === usernameFound && loggedIn) {
      // Send them to a members page.
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