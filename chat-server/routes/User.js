const express = require('express')
const moongose = require('mongoose')
const router =express.Router()
const Users = require('./../models/User')

module.exports = router

// Create User
router.post('/create', async (req, res) => {

    const User = new Users({
        Username: req.body.Username,
        Fullname: req.body.Fullname,
        Email: req.body.Email,
        Password: req.body.Password ,
        Age: req.body.Age,
        Profession: req.body.Profession ,
    })
    try{
        const NewUser = await User.save()
        res.status(201).json(
            {
                message:"sucessfully created!",
                Data: NewUser
            }
        )
    }
    catch(err){
        res.status().json({message:err.message})

    }
    

})

// Update User
router.patch('/',  (req, res)=> {
   
})

// Delete User


// Delete One  User
router.delete('/:id',getUserById, async (req,res) =>{
    try{
        
        await res.User.remove ()
        res.json({message:"deleted user sucessfully"})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})
    



// Get User by Id
router.get('/:id',getUserById, (req, res)=>{
    res.json(res.User)

})
// Get User all
router.get('/',async (req,res)=>{
    try {
        const users =  await Users.find()
        res.json(users)
    } 
    catch (error) {
        res.status(500).json({message : error.message})
        
    }
    

})
// Get User by email
router.get('/:email', (req, res)=>{
    
})

// Get User by username
router.get('/:username', (req, res)=>{
    
})

async function getUserById(req,res,next){
    let member
    console.log(req.params.id) 
    try {
        member = await Users.findById(req.params.id)
        
        if ( User == null){
            return res.status(404).json({message:'Cannot find User'})
        }
    }
    catch (err){
        return res.status(500).json({message:err.message})
    }
    res.User = member
    next()
}
 
async function getUserByEmail(req,res,next){
    let User 
    try {
        User = await Users.findById(req.params.id)
        if (User == null){
            return res.status(404).json({message:'Cannot find User'})
       }
    }
    catch (err){
        return res.status(500).json({message:err.message})
    }
    res.User = User
    next()
}

async function getUserByUsername(req,res,next){
    let User 
    try {
        User = await Users.findById(req.params.id)
        if (User == null){
            return res.status(404).json({message:'Cannot find User'})
       }
    }
    catch (err){
        return res.status(500).json({message:err.message})
    }
    res.User = User
    next()
}