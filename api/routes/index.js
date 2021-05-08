var express = require("express");
var router = express.Router();
const {Operation} = require("../models")

const GetOperations = require("./GetOperations");
const CreateOperation = require("./CreateOperation");
const Register = require("./Register")

/* GET all operations */
router.get("/operations", GetOperations);

//create a new operation
router.post("/create_operation", CreateOperation )

//register user
router.post("/register", Register )

module.exports = router;
