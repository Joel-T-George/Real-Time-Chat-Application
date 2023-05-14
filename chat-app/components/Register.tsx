import React ,{useState} from "react";
import { Link } from "react-router-dom";

const RegisterHandler: React.FC<{}> = ()=>{
  const [Username,setUsername] = useState()
  const [Fullname,setFullname]=useState()
  const [Email,setEmail]=useState()
  const [Password,setPassword]=useState()
  const [Age,setAge]=useState()
  const [Profession,setProfession]=useState()

  const submitHandler = (e:any)=>{
    e.preventDefault();

    console.log(Username,Fullname,Email,Password,Age,Profession)

  }
  return (
    <div className="m-2 ">
      <h1 className=" text-center p-4 text-3xl font-bold ">Create Account</h1>
      <form className=" place-content-center p-3 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl" onSubmit={submitHandler} >
        <div className=" gap-2 grid grid-cols-2 m-2">
          <label className="m-1 " htmlFor="username">Username</label>
          <label  className="m-1"htmlFor="Fullname">Fullname</label>
        
          <input   className="mr-2 p-2  placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"  value ={Username} onChange={(e:any)=>{ setUsername(e.target.value)}} type="text" placeholder="john2Bas" id="username" />
          <input  className="mr-2 p-2  placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" value ={Fullname} onChange={(e:any) =>{ setFullname(e.target.value)}}  type="text" placeholder="John Oral Baskar" id="Fullname" />
          <label className="m-1 " htmlFor="Email">Email</label>
          <label className="m-1" htmlFor="Age">Age</label>
          <input className="mr-2 p-2  placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"  value ={Email} onChange={(e:any) =>{ setEmail(e.target.value)}} type="email" placeholder="john@email.com" id="Email" />
          <input  className="mr-2 p-2  placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"  value ={Age} onChange={(e:any) =>{ setAge(e.target.value)}} type="number" placeholder="Current Age" id="Age" />
          <label className="m-1" htmlFor="Profession">Profession</label>
          <label className="m-1" htmlFor="Password">Password</label>
          <input className="mr-2 p-2  placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"  value ={Profession} onChange={(e:any) =>{ setProfession(e.target.value)}} type="text" placeholder="Artist" id="Profession" />
          <input className="mr-2 p-2  placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"  value ={Password} onChange={(e:any) =>{ setPassword(e.target.value)}} type="password" placeholder="Strong Password" id="Password" />
          
          <button className="text-slate-100 text-xl  font-semibold border-2 border-violet-100/75 p-2 py-3 m-4 bg-sky-500 rounded-full focus:ring hover:bg-sky-700 self-center" type="submit">Register</button>
          <div className=" m-1 text-center">
            <p className="m-2 text-sm"> if already created account..</p>
            <Link className="m-5 p-2 px-4 bg-violet-100  rounded-full hover:bg-green-200" to="/login">Login</Link>
          </div>
        </div>
      </form>
    </div>

  )
}


export default RegisterHandler
   