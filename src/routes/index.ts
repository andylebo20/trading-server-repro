import { router } from "../utils/routeWrapper"

router.use("/users", require("./users"));
module.exports = router;
