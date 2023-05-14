import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navigation = [
  ['Home', '/welcome/'],
  ['About', '/welcome/About'],
  ['Policy', '/welcome/Policy'],
  ['Contact', '/welcome/Contact']
]
const NonNavbar: React.FC<{}> = ()=>{
  return (
    <div className="shadow-lg md:w-full w-2/3 h-full md:h-auto fixed top-0 md:m-0 left-0 bg-sky-800/90  md:p-4 " >
      <nav className="flex  md:justify-end space-x-4 md:m-0 ">
        <ul className="md:inline-flex "> {
        Navigation.map(([title, url]) => (
          <li className="text-white   md:text-lg text-lg font-medium md:m-2 m-5">
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
   