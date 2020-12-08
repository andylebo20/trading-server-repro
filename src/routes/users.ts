import { router } from "../utils/routeWrapper";
import { UserController } from "../controllers/UserController";

router.post("/", UserController.createUser);

module.exports = router;
