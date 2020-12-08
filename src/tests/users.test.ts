const axios = require("axios").default;
import { constants } from "../utils/constants";
const faker = require("faker");

const routeUrl = constants.localServerUrl + "/users";

describe("Users", () => {
  it("creates a new user", async () => {
    const userObj = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phoneNumber: "+14444444444",
      uid: faker.random.uuid(),
    };
    const userRes = await axios.post(routeUrl + "/", userObj);
    const createdUser = userRes.data.user;
    expect(createdUser.firstName).toBe(userObj.firstName);
    expect(createdUser.lastName).toBe(userObj.lastName);
    expect(createdUser.uid).toBe(userObj.uid);
    expect(createdUser._id).toBeTruthy();
  });
});
