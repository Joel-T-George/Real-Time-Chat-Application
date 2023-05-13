import React, { useState }  from "react";

const Loginhandler: React.FC<{}> = ()=>{
  const [email,setEmail] = useState()
  const [username,setUsername]=useState()
  const [password,setPassword]=useState()

  const submitHandler = (e:any)=>{
    e.preventDefault();

    console.log(email,username,password)

  }
  return (

    <form onSubmit={submitHandler} >
      <label htmlFor="username">Username</label>
      <input  value ={username} onChange={(e:any)=>{ setUsername(e.target.value)}} type="text" placeholder="username" id="username" />
      <label htmlFor="email">Email</label>
      <input value ={email} onChange={(e:any) =>{ setEmail(e.target.value)}}  type="email" placeholder="your@email.com" id="email" />
      <label htmlFor="password">Password</label>
      <input value ={password} onChange={(e:any) =>{ setPassword(e.target.value)}} type="password" placeholder="your password" id="password" />
      <button type="submit">Log In</button>
    </form>
  )
}


export default Loginhandler
   