import React from "react";
import Home from "../pages/Home"
import About from '../pages/DetailsPage/About'
import Contact from '../pages/DetailsPage/Contact'
import Policy from '../pages/DetailsPage/Policy'
import { Routes ,Route} from "react-router-dom";

const WelcomeLayoutRoute: React.FC<{}> = ()=>{
  return (
   
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Policy" element={<Policy/>}/>
    </Routes>
  )
}


export default WelcomeLayoutRoute
   