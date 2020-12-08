import { exceptionHandler } from "../utils/exceptionHandler";
import { UserService } from "../services/UserService";

export class UserController {
  static async createUser(req, res) {
    const userBody = req.body;
    const createdUser = await UserService.createUser(userBody);
    res.send({ user: createdUser });
  }
}
