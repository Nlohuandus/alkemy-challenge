const {Sequelize, DataTypes} = require("sequelize");

const db = new Sequelize("postgres://postgres:47267986@localhost:5432/alkemy", {
});

const Operaciones = db.define("operaciones",{
  concepto:{
    type: DataTypes.STRING,
    allownull: false,
  },
  monto:{
    type: DataTypes.FLOAT,
    allowNull:false
  },
  tipo:{
    type: DataTypes.ENUM("ingreso", "egreso")
  }
})


//relaciones aca 
//operaciones.belongsToMany(user)

module.exports = {db, Operaciones}