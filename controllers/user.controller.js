const db = require('../models')

//create main model

const User = db.users

//main work
//create user

const addUser = async (req, res) => {
    let info = {
        email:req.body.email,
        name:req.body.name,
        surname:req.body.surname
    }
    const user = await User.create(info)
    res.status(200).send(user)
    console.log(user)
}
//get all users

const getAllUsers = async(req, res) =>{
    let users = await User.findAll({})
    res.status(200).send(users)
}

//get single user

const getOneUser = async (req,res) =>{
    let id = req.params.id
    let user = await User.findOne({
        where: { id:id }})
        res.status(200).send(user)
}



module.exports ={
    addUser,
    getAllUsers,
    getOneUser,
}
