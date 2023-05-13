import { Route, Routes } from "react-router-dom"
import Welcome from "../pages/Welcome"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Dashbaoard from '../pages/Dashboard'

function App() {
 

  return (
  
    
    <Routes>
      <Route path="/" element={<Dashbaoard />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<Register />} />
    </Routes>
    
  
  )
}

export default App
