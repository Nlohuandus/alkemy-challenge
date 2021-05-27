const {Operation, User} = require("../models")

module.exports=
    async function (req, res, _next) {
      let {id} = req.query
        try {
          let result = await Operation.findAll({
            where:{
               UserId: id
              }
          })
          res.status(200).json(result);    
        } catch (error) {
          console.error(error)
        }
      }
