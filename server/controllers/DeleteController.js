class DeleteControllerBlueprint {
  deleteUser(username, password) {

  }
  deleteDonation() {

  }
}

const DeleteController = new DeleteControllerBlueprint();
const deleteUser = DeleteController.deleteUser;


module.exports = {
  deleteUser,
}