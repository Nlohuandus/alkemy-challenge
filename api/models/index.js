const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize("postgres://postgres:47267986@localhost:5432/alkemy", {
  logging: false,
});

const Operation = db.define("Operation", {
  concept: {
    type: DataTypes.STRING,
    allownull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM("inflow", "outflow"),
  },
},{freezeTableName: true});

const User = db.define(
  "User",
  {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false, freezeTableName: true }
);

User.hasMany(Operation)
Operation.belongsTo(User)

module.exports = { db, Operation, User };
