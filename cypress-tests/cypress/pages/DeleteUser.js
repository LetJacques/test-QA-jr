class DeleteUserPage {
  selectorsList = {
    lastDeleteButton: "tr:last-child [alt='delete']",
    okButton: ".swal2-confirm[type='button']",
  };

  clickLastDeleteButton() {
    cy.get(this.selectorsList.lastDeleteButton).click();
    cy.get(this.selectorsList.okButton).click();
  }
}

export default DeleteUserPage;
