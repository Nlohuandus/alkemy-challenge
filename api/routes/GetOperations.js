const {Operation} = require("../models")

module.exports=
    async function (_req, res, _next) {
        try {
          let result = await Operation.findAll()
          res.status(200).json(result);    
        } catch (error) {
          console.error(error.message)
        }
      }
