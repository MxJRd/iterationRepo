const bcrypt = require('bcrypt');

class AuthenticationBlueprint {
  async authenticateUser(username, password) {
    
    const loggedIn = await bcrypt.compare(password, hashedPW); //should be a boolean?
    if (loggedIn) {
      next();
    } else {
      throw "User credentials are incorrect.";
    }
  }
}

const Authentication = new AuthenticationBlueprint();
const authenticateUser = Authentication.authenticateUser;

module.exports = {
  authenticateUser
}