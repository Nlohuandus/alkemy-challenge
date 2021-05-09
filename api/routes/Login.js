require("dotenv").config();
const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = async function (req, res) {
  let { email, password } = req.body;
  let user = await User.findOne({
    where: {
      email,
    },
  });
  try {
    const valid = await bcrypt.compare(password, user.password);
    const accessToken = jwt.sign(
      JSON.stringify(user),
      process.env.TOKEN_SECRET
    );
    if (valid) { 
      res.json({ accessToken: accessToken, userid: user.id });
    } else {
      res.json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error.message);
  }
};
