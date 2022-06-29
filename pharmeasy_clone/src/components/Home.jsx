import React from "react";
import { useState, useEffect } from "react";
import Sliderdata  from "./Homepage/SliderData";
import ShopByCate from "../ShopByCate";
import LabTestByHealthConcern from  "../LabTestByHealthConcern"
import NewLanches  from "../NewLanches";



const  Home = () =>{
  

    return (
        <div>
         <NewLanches />
  <LabTestByHealthConcern />
      <Sliderdata />
      < ShopByCate />
        </div>
      );
    
}

export default Home;