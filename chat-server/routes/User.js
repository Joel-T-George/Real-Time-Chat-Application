const express = require('express')
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
router.delete('/', (req, res)=> {

})

// Delete One  User
router.delete('/:id', (req,res)=>{

}) 

// Get User by Id
router.get('/:id', (req, res)=>{

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
