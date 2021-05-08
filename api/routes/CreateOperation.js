const {Operation, User} = require("../models")

module.exports = async function(req, res) {
  let {concept, amount, type, userId} = req.body
    try {
      let user = await User.findOne({
        where:{
          id: userId
        }
      })
      let newOperation = await Operation.create({
        concept: concept,
        amount: amount,
        type: type
      })
      await user.addOperation(newOperation)
      res.status(201).json(newOperation)
    } catch (error) { 
      console.error(error.message)
    }
  }