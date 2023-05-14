import React from "react";
import Navbar from './../components/NonUserNavbar'
import WelcomeLayoutRoute from "../RouteLayouts/WelcomeRouteLayout"

const WelcomeLayout:React.FC<{}> = ()=> {
  return (
    <>
      <Navbar />
      <WelcomeLayoutRoute />
    </>



  );
}


export default WelcomeLayout
  