class EditUserPage {
  selectorsList = {
    lastEditButton: "tr:last-child [alt='edit']",
  };

  clickLastEditButton() {
    cy.get(this.selectorsList.lastEditButton).click();
  }
}

export default EditUserPage;
