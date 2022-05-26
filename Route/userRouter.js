const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.route("/").get(userController.Allusers).post(userController.Createuser);
router
  .route("/:id")
  .get(userController.getuser)
  .patch(userController.UpdateUser)
  .delete(userController.deleteUser);

module.exports = router;
