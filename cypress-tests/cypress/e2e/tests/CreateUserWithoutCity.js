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

    createUserPage.submit();
  });
});

