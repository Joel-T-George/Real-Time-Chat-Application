import React from "react";
import Loginhandler from './../components/Login'
const Login: React.FC<{}> = ()=>{
  return (
    <div className="Login" >
      <Loginhandler/>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

    </div>
  )
}


export default Login