class CreateUserPage {
  selectorsList = {
    newUserButton: "#new-user",
    nameField: '[placeholder="Nome"]',
    emailField: "[placeholder='Email']",
    phoneField: "[placeholder='Telefone']",
    cityField: "[placeholder='Cidade de nascimento']",
    dateField: "[placeholder='Data de nascimento']",
    searchInput: "#search_input",
    optionContainer: ".optionContainer",
    modal: ".react-modal-content",
    submitButton: "[type='submit']",
  };

  visit() {
    cy.visit("http://localhost:5400/");
  }

  clickNewUser() {
    cy.get(this.selectorsList.newUserButton).click();
  }

  fillUserInfo(name, email, phone, city, date) {
    if (name) {
      cy.get(this.selectorsList.nameField).type(name);
    }
    if (email) {
      cy.get(this.selectorsList.emailField).type(email);
    }
    if (phone) {
      cy.get(this.selectorsList.phoneField).type(phone);
    }
    if (city) {
      cy.get(this.selectorsList.cityField).type(city);
    }
    if (date) {
      cy.get(this.selectorsList.dateField).type(date);
    }
  }

  selectCompany(companyName) {
    cy.get(this.selectorsList.searchInput).click();
    cy.get(this.selectorsList.searchInput).type(companyName);
    cy.get(this.selectorsList.optionContainer).should("be.visible");
    cy.get(".option").contains(companyName).click();
  }

  clickOutside() {
    cy.get(this.selectorsList.modal).click();
  }

  submit() {
    cy.get(this.selectorsList.submitButton).click();
  }
}

export default CreateUserPage;
