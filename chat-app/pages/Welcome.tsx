import React from "react";
import { Link } from "react-router-dom";

const Welcome: React.FC<{}> = ()=>{
  return (
    <div className="Login" >
        <Link to="/login">Login</Link>
        <br></br>
        <Link to= "/SignUp">Register</Link>
    </div>
  )
}


export default Welcome
  