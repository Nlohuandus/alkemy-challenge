var express = require("express");
var router = express.Router();
const GetOperations = require("./GetOperations");
const CreateOperation = require("./CreateOperation");
const Register = require("./Register");
const Login = require("./Login");
const DeleteUser = require("./DeleteUser")

/* GET all operations */
router.get("/operations", GetOperations);

//create a new operation
router.post("/create_operation", CreateOperation )

//register user
router.post("/register", Register )

// login user
router.post("/login", Login)

//delete user
router.post("/delete_user", DeleteUser )


module.exports = router;
