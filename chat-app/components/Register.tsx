import React ,{useState} from "react";

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

    <form onSubmit={submitHandler} >
      <label htmlFor="username">Username</label>
      <input  value ={Username} onChange={(e:any)=>{ setUsername(e.target.value)}} type="text" placeholder="john2Bas" id="username" />
      <label htmlFor="Fullname">Fullname</label>
      <input value ={Fullname} onChange={(e:any) =>{ setFullname(e.target.value)}}  type="text" placeholder="John Oral Baskar" id="Fullname" />
      <label htmlFor="Email">Email</label>
      <input value ={Email} onChange={(e:any) =>{ setEmail(e.target.value)}} type="email" placeholder="john@email.com" id="Email" />
      
      <label htmlFor="Age">Age</label>
      <input value ={Age} onChange={(e:any) =>{ setAge(e.target.value)}} type="number" placeholder="Current Age" id="Age" />
      <label htmlFor="Profession">Profession</label>
      <input value ={Profession} onChange={(e:any) =>{ setProfession(e.target.value)}} type="text" placeholder="Artist" id="Profession" />
      <label htmlFor="Password">Password</label>
      <input value ={Password} onChange={(e:any) =>{ setPassword(e.target.value)}} type="password" placeholder="Strong Password" id="Password" />
      <button type="submit">Register</button>
    </form>
  )
}


export default RegisterHandler
   