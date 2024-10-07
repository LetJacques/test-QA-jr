import CreateUserPage from "../../pages/CreateUserPage";

describe("Create User Without Email", () => {
  const createUserPage = new CreateUserPage();

  beforeEach(() => {
    cy.fixture("invalidUserData").then((invalidData) => {
      this.invalidUserData = invalidData.missingEmail;
    });
    createUserPage.visit();
    createUserPage.clickNewUser();
  });

  it("should show an error when email is not provided", function () {
    createUserPage.fillUserInfo(
      this.invalidUserData.name,
      this.invalidUserData.email,
      this.invalidUserData.phone,
      this.invalidUserData.city,
      this.invalidUserData.birthdate
    );
    createUserPage.submit();
  });
});
