const {Operation} = require("../models")

module.exports = async function(req, res) {
    try {
      let {concept, amount, type} = req.body
      let newOperation = await Operation.create({
        concept: concept,
        amount: amount,
        type: type
      })
      res.status(201).json(newOperation)
      
    } catch (error) { 
      console.error(error.message)
    }
  }