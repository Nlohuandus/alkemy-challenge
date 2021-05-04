var express = require("express");
var router = express.Router();
const {Operaciones} = require("../models")

/* GET home page. */
router.get("/operations", async function (_req, res, _next) {
  try {
    let result = await Operaciones.findAll()
    res.status(200).json(result);    
  } catch (error) {
    console.log(error.message)
  }
});

router.post("/create", async function(req, res) {
  try {
    let {concepto, monto, tipo} = req.body
    let newOperation = await Operaciones.create({
      concepto: concepto,
      monto: monto,
      tipo: tipo
    })
    res.status(201).json(newOperation)
    
  } catch (error) {
    console.log(error.message)
  }
})

module.exports = router;
