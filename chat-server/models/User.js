const moongose = require("mongoose");
const {Schema,model} = moongose;


const UserModel = new Schema({
    Username: {
        type: String,
        required: true,
        lowercase:true,
        unique : true
    },
    Fullname: {
        type: String
    },
    Email: {
        type: String,
        required: true,
        lowercase: true,
        unique : true

    },
    Password: {
        type: String,
        required: true
    },
    Age:{
        type: Number,
        min: 10,
        max:100
    },
    Profession: {
        type: String
    },
    CreatedAt:{
        type: Date,
        immutable:true,
        default: () => Date.now()
    },
    UpdatedAt:{
        type: Date,
        default: () => Date.now()
    }



});

const User = model('Users',UserModel );
module.exports = User;

     