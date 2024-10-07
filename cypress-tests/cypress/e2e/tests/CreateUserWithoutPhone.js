import CreateUserPage from "../../pages/CreateUserPage";

describe("Create User Without Phone", () => {
  const createUserPage = new CreateUserPage();

  beforeEach(() => {
    cy.fixture("invalidUserData").then((invalidData) => {
      this.invalidUserData = invalidData.missingPhone;
    });
    createUserPage.visit();
    createUserPage.clickNewUser();
  });

  it("should show an error when phone number is not provided", function () {
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
