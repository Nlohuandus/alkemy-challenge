const { User } = require("../models");
const bcrypt = require("bcrypt");

module.exports = async function (req, res) {
  try {
    let { email, username, password } = req.body;
    let passwordEncrypted = await bcrypt.hash(password, 12);
    let newUser = {
      email,
      username,
      password: passwordEncrypted,
    };
    await User.create(newUser);
    res.status(201).redirect("http://localhost:3000/login");
  } catch (error) {
    if (
      error.message ===
      "llave duplicada viola restricción de unicidad «User_email_key»"
    ) {
      res.status(302).redirect("http://localhost:3000/login?exist=true");
    } else {
      console.error(error.message);
    }
  }
};
