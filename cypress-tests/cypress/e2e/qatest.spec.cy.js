import CreateUserPage from "../pages/CreateUserPage";
import EditUserPage from "../pages/EditUser";
import DeleteUserPage from "../pages/DeleteUser";

describe("User CRUD Operations", () => {
  const createUserPage = new CreateUserPage();
  const editUserPage = new EditUserPage();
  const deleteUserPage = new DeleteUserPage();

  let userData;
  let invalidUserData;

  before(() => {
    cy.fixture("userData").then((data) => {
      userData = data;
    });
    cy.fixture("invalidUserData").then((data) => {
      invalidUserData = data;
    });
  });

  it("should create a new user, edit it, and then delete it", () => {
    createUserPage.visit();
    createUserPage.clickNewUser();
    createUserPage.fillUserInfo(
      userData.name,
      userData.email,
      userData.phone,
      userData.city,
      userData.birthdate
    );
    userData.companies.forEach((company) => {
      createUserPage.selectCompany(company);
    });

    createUserPage.clickOutside();
    createUserPage.submit();
    editUserPage.clickLastEditButton();
    deleteUserPage.clickLastDeleteButton();
  });

  it("should show error when creating user without a name", () => {
    createUserPage.visit();
    createUserPage.clickNewUser();
    createUserPage.fillUserInfo(
      invalidUserData.missingName.name,
      userData.email,
      userData.phone,
      userData.city,
      userData.birthdate
    );
    userData.companies.forEach((company) => {
      createUserPage.selectCompany(company);
    });
    createUserPage.submit();
  });

  it("should show error when creating user without an email", () => {
    createUserPage.visit();
    createUserPage.clickNewUser();
    createUserPage.fillUserInfo(
      invalidUserData.missingEmail.name,
      invalidUserData.missingEmail.email,
      invalidUserData.missingEmail.phone,
      invalidUserData.missingEmail.city,
      invalidUserData.missingEmail.birthdate
    );
    createUserPage.submit();
  });

  it("should show error when creating user without a phone number", () => {
    createUserPage.visit();
    createUserPage.clickNewUser();
    createUserPage.fillUserInfo(
      userData.name,
      userData.email,
      invalidUserData.missingPhone.phone,
      userData.city,
      userData.birthdate
    );
    userData.companies.forEach((company) => {
      createUserPage.selectCompany(company);
    });
    createUserPage.submit();
  });

  it("should show error when creating user without a city", () => {
    createUserPage.visit();
    createUserPage.clickNewUser();
    createUserPage.fillUserInfo(
      userData.name,
      userData.email,
      userData.phone,
      invalidUserData.missingCity.city,
      userData.birthdate
    );
    userData.companies.forEach((company) => {
      createUserPage.selectCompany(company);
    });
    createUserPage.submit();
  });
});
