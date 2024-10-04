import CreateUserPage from "../pages/CreateUserPage";
import EditUserPage from "../pages/EditUser";
import DeleteUserPage from "../pages/DeleteUser";

describe("User CRUD Operations", () => {
  const createUserPage = new CreateUserPage();
  const editUserPage = new EditUserPage();
  const deleteUserPage = new DeleteUserPage();

  let userData;

  before(() => {
    cy.fixture("userData").then((data) => {
      userData = data;
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
});
