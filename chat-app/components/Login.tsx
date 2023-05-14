import React, { useState }  from "react";
import { Link } from "react-router-dom";

const Loginhandler: React.FC<{}> = ()=>{
  const [email,setEmail] = useState()
  const [username,setUsername]=useState()
  const [password,setPassword]=useState()

  const submitHandler = (e:any)=>{
    e.preventDefault();

    console.log(email,username,password)

  }
  return (
    <div>
    <h1 className=" text-center p-4 text-3xl font-bold ">Join now</h1>
    <form className="place-content-center p-3 max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl" onSubmit={submitHandler} >
      <div className=" gap-2 grid grid-cols-1 m-2">
      <label className="m-1 font-semibold" htmlFor="username">Username</label>
      <input className="mr-2 p-2  placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" value ={username} onChange={(e:any)=>{ setUsername(e.target.value)}} type="text" placeholder="username" id="username" />
      <label className="m-1 font-semibold" htmlFor="email">Email</label>
      <input className="mr-2 p-2  placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" value ={email} onChange={(e:any) =>{ setEmail(e.target.value)}}  type="email" placeholder="your@email.com" id="email" />
      <label className="m-1 font-semibold" htmlFor="password">Password</label>
      <input className="mr-2 p-2  placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" value ={password} onChange={(e:any) =>{ setPassword(e.target.value)}} type="password" placeholder="your password" id="password" />
      <button className="text-slate-100 text-xl shadow-md hover:shadow-slate-500/50 font-semibold border-1 border-violet-300/75 p-2 py-3 m-4 bg-sky-500 rounded-full focus:ring hover:bg-sky-700 self-center" type="submit">Log In</button>
      </div>
    </form>
      <div className=" m-1 text-center">
            <p className="m-2 italic text-slate-800/70 text-sm"> not have account create it</p>
            <Link className="m-5 p-2 px-4 font-semibold bg-violet-300/10   rounded-md hover:shadow-sm hover:shadow-slate-500/70 hover:bg-blue-500/75 hover:text-white" to="/SignUp">Sign up</Link>
          </div>
    </div>
  )
}


export default Loginhandler
   