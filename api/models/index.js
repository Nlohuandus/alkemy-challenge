const {Sequelize, DataTypes} = require("sequelize");

const db = new Sequelize("postgres://postgres:47267986@localhost:5432/alkemy", {
  logging: false,
});

/*const NombreDeTabla = db.define("nombreDeTabla"),{
  title:{
    type:DataTypes.STRING,
    allownull: true
  }
}
*/
const NombreDeTabla = db.define("nombreDeTabla",{
  title:{
    type: DataTypes.STRING,
    allownull: true
  }
})

module.exports = {db, NombreDeTabla}