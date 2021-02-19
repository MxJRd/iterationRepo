class GetQueriesBlueprint {
  async getUsernameQuery(username) {
    const userQuery = `SELECT * FROM users WHERE user_name = ${username}`;
  }
  async getPasswordQuery(password) {
    const passwordQuery = `SELECT password FROM users WHERE password = ${password}`;
  }
  async getAllDonationsQuery() {
    return 'SELECT sum(amount) FROM donations'; //TABLE NAME
  }
}

const GetQueries = new GetQueriesBlueprint();

const getUsernameQuery = GetQueries.getUsernameQuery;
const getPasswordQuery = GetQueries.getPasswordQuery;
const getAllDonationsQuery = GetQueries.getAllDonationsQuery;

module.exports = {
  getUsernameQuery,
  getPasswordQuery,
  getAllDonationsQuery
}
