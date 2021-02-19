class DeleteControllerBlueprint {
  deleteUser(username, password) {

  }
  deleteDonation() {

  }
}

const DeleteController = new DeleteControllerBlueprint();
const deleteUser = DeleteController.deleteUser;
const deleteDonation = DeleteController.deleteDonation;

module.exports = {
  deleteUser,
  deleteDonation
}