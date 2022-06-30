import React from "react";
import Sliderdata  from "./Homepage/SliderData";
import ShopByCate from "../ShopByCate";
import LabTestByHealthConcern from  "../LabTestByHealthConcern"
import NewLanches  from "../NewLanches";
import ShopByConcern from "./ShopByConcern";
import TrendingNearYou from "../TrendingNearYou";
import FrequentlyBookedLabtests from "../FrequentlyBookedLabtests";
import Navbar from "./Homepage/Landing_page/Navbar";
import styled from "styled-components";




const  Home = () =>{
  
    return ( 
    <div>
        <Navbar />

        <Sliderdata />
        <div>
            <img src="https://cms-contents.pharmeasy.in/banner/4539563004d-MEGA20_App.jpg" alt="" />
            <img src="https://cms-contents.pharmeasy.in/banner/3924facbf8c-HP_.jpg" alt="" />
            <img src="https://cms-contents.pharmeasy.in/banner/8b3f5424f6d-WELCOME400_HP.jpg" alt="" />
            <img src="https://cms-contents.pharmeasy.in/banner/517d7ee972f-App.jpg" alt="" />
            <img src="https://cms-contents.pharmeasy.in/banner/cba69ac6ae6-HomepageBanner1.jpg" alt="" />
            <img src="https://cms-contents.pharmeasy.in/banner/e2335fae090-Liveasy_diabetic_App.jpg" alt="" />
            <img src="https://cms-contents.pharmeasy.in/banner/0fe49d53961-HP.jpg" alt="" />
            <img src="https://cms-contents.pharmeasy.in/banner/7140411e069-omicron_Lupin.jpg" alt="" />
        </div>
        < ShopByCate />
        <LabTestByHealthConcern />
        <ShopByConcern />
        <FrequentlyBookedLabtests />
        <NewLanches />
      <TrendingNearYou />
        </div>
      );
    
}

export default Home;
