const moongose = require("mongoose");
const {Schema,model} = moongose;


const UserModel = new Schema({
    Username: String,
    Fullname: String,
    Emailid: String,
    Password:String,
    Age:Number,
    Profession: String,
    CreatedAt:Date


});

const User = model('Users',UserModel );
module.exports = User;

     