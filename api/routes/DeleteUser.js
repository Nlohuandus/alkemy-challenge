const {User} = require("../models")

module.exports= async function(req, res){
    try {
        const {id} = req.body 
        let user = await User.findByPk(id)
        await user.destroy()
        res.status(200).json({message: "Succesfull"})
    } catch (error) {
        console.log(error.message)
    }
}