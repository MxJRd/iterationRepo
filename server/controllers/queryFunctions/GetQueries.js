class GetQueriesBlueprint {
  getUsernameQuery(username) {
    return `SELECT * FROM users WHERE user_name = '${username}'`;
  }
  getPasswordQuery(password) {
    const passwordQuery = `SELECT password FROM users WHERE password = ${password}`;
  }
  getAllDonationsQuery() {
    return 'SELECT sum(amount) FROM donations';
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
