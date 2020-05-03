const express = require("express");
const router = express.Router();

// Middlewares
const { signUpValidation } = require("../middleware/validation");

// Controllers
const UserController = require("../controllers/user");

// Models
const User = require("../models/User");

// Methods
router.post("/signup", signUpValidation, UserController.signUpUser);

router.post("/login", UserController.loginUser);

router.delete("/:userId", UserController.deleteUser);

router.patch("/:userId", UserController.updateUser);

module.exports = router;
