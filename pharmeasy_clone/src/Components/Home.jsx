import React from "react";
import  ReactDOM  from "react-dom";
import Navbar from "./Homepage/Navbar"
import BelowNav from "./Homepage/BelowNav";
import Sliderdata from "./Homepage/Sliderdata";
import ShopByCategory from "./Homepage/ShopByCategory"
import LabTestByHealthConcern from "./Homepage/LabTestByHealthConcern"

const Home= ()=> {


    return (
      <>
      <Navbar />
      <BelowNav />
      <Sliderdata/>
   <LabTestByHealthConcern />
   <ShopByCategory />


      </>
    );
}
export default Home;