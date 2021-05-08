const { User } = require("../models");
const bcrypt = require("bcrypt")
const { jwt } = require("jsonwebtoken");

module.exports = async function (req, res) {
  try {
    let { email, username, password } = req.body;
    let passwordEncrypted = await bcrypt.hash(password, 12);
    let newUser = {
      email,
      username,
      passwordEncrypted,
    };
    await User.create(newUser);

    res.status(201).json(newUser);
  } catch (error) {
    if(error.message === "llave duplicada viola restricción de unicidad «User_email_key»"){
        res.send(200)
    }
  }
};
