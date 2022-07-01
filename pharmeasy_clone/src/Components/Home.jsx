import React from "react";
import  ReactDOM  from "react-dom";
import Navbar from "./Homepage/Navbar"
import BelowNav from "./Homepage/BelowNav";
import Sliderdata from "./Homepage/Sliderdata";
import LabTestByHealthConcern from "./Homepage/LabTestByHealthConcern"

const Home= ()=> {


    return (
      <>
      <Navbar />
      <BelowNav />
   <LabTestByHealthConcern />

      </>
    );
}
export default Home;