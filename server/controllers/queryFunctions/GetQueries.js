class GetQueriesBlueprint {
  async getUser(req, res, next) {
    const userQuery = `SELECT name FROM ` //TABLE NAME
    next();
  }
  async getAllDonations() {
    return 'SELECT sum(amount) FROM donations'; //TABLE NAME
  }
}

const GetQueries = new GetQueriesBlueprint();

const getUser = GetQueries.getUser;
const getAllDonations = GetQueries.getAllDonations;

module.exports = {
  getUser,
  getAllDonations
}
