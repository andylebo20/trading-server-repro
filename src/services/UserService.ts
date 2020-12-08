import { User } from "../models/User";

export class UserService {
  static async createUser(userBody) {
    return User.create(userBody);
  }
}
