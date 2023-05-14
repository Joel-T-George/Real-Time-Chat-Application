import React from "react";
import Navbar from './../components/NonUserNavbar'
import WelcomeLayoutRoute from "./../Routelayout/WelcomeRouteLayout"

const WelcomeLayout:React.FC<{}> = ()=> {
  return (
    <>
      <Navbar />
      <WelcomeLayoutRoute />
    </>



  );
}


export default WelcomeLayout
  