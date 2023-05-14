import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Navigation = [
  ['Home', '/welcome/'],
  ['About', '/welcome/About'],
  ['Policy', '/welcome/Policy'],
  ['Contact', '/welcome/Contact']
]
const NonNavbar: React.FC<{}> = ()=>{
  const [open,setOpen]=useState()
  return (
    <div className="shadow-lg md:w-full w-full h-2/4 md:h-auto fixed md:flex items-center justify-around top-0 md:m-0 left-0 bg-sky-800/90  md:p-4 " >
      
      <nav className="flex  md:justify-start space-x-4 md:m-0 text-white md:text-lg text-lg font-medium ">
      <span className=" md:m-0 text-3xl md:pt-1 m-1 mr-2"  >Real Chat</span>
        <span className="text-2xl absolute right-5 top-3 md:hidden " >X</span>
        <ul className="md:inline-flex absolute md:static md:m-0 mt-5 md:z-auto z-[-1] pl-3 transition-all duration-500 ease-in"> {
        Navigation.map(([title, url]) => (
          <li key={title} className="text-white   md:text-lg text-lg font-medium md:m-2 m-5">
            <NavLink

              key={title} 
              to={url}
              className ={({isActive})=>{

                console.log(title+" "+isActive)
                return ' md:px-3 md:py-4  font-medium duration-500 hover:bg-slate-100 hover:text-slate-900 '+
                (!isActive ? "joel": "non") }} >{title} </NavLink> </li> ))} 
          <li  className="text-white  md:text-lg font-medium md:m-2 m-5 my-7" ><Link className="px-3 py-2 md:px-3 md:py-1 md:m-2 border-2 text-white border-sky-400/40 rounded-md bg-sky-500/50 duration-500  text-lg font-semibold hover:bg-slate-100  hover:text-slate-900" to="/login">Login</Link></li>
          <li  className="text-white  md:text-lg font-medium md:m-2 m-5" ><Link className=" md:px-3 md:py-1 md:m-2 px-3 py-2 border-2 duration-500 text-white border-sky-400/40 rounded-md bg-sky-500/50  md:text-lg text-lg font-semibold  hover:bg-slate-100 hover:text-slate-900"to="/SignUp">Register</Link></li>
        </ul>
      </nav>
    </div>
  )
}

    

export default NonNavbar
   