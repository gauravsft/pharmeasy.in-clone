import React from "react";
import Sliderdata  from "./Homepage/SliderData";
import ShopByCate from "./Homepage/ShopByCate";
import LabTestByHealthConcern from  "./Homepage/LabTestByHealthConcern"
import NewLanches  from "./Homepage/NewLanches";
import ShopByConcern from "./Homepage/ShopByConcern";
import TrendingNearYou from "./Homepage/TrendingNearYou";
import FrequentlyBookedLabtests from "./Homepage/FrequentlyBookedLabtests";
import  OffersJustForYou from "./Homepage/OffersJustForYou"
import Navbar from "./Homepage/css Components/navbar.css";


import {BsHandThumbsUp} from 'react-icons/bs';
import {VscHome} from 'react-icons/vsc';
import {GrCompliance} from 'react-icons/gr';
import {RiShieldCheckLine} from 'react-icons/ri';






const  Home = () =>{
 
    return ( 
    < >
        
            <Navbar />
         
     

        <Sliderdata />
        <div style={{display:"flex"}}>
            <img src="https://cms-contents.pharmeasy.in/banner/4539563004d-MEGA20_App.jpg" alt="" />
            <img src="https://cms-contents.pharmeasy.in/banner/3924facbf8c-HP_.jpg" alt="" />
            <img src="https://cms-contents.pharmeasy.in/banner/8b3f5424f6d-WELCOME400_HP.jpg" alt="" />
            <img src="https://cms-contents.pharmeasy.in/banner/517d7ee972f-App.jpg" alt="" />
            <img src="https://cms-contents.pharmeasy.in/banner/cba69ac6ae6-HomepageBanner1.jpg" alt="" />
            <img src="https://cms-contents.pharmeasy.in/banner/e2335fae090-Liveasy_diabetic_App.jpg" alt="" />
            <img src="https://cms-contents.pharmeasy.in/banner/0fe49d53961-HP.jpg" alt="" />
            <img src="https://cms-contents.pharmeasy.in/banner/7140411e069-omicron_Lupin.jpg" alt="" />
        </div>
        <div><h2 style={{  fontFamily:"sans-serif"}}> Offers Just For You</h2></div>
        < OffersJustForYou />
        <div>
            <h2  style={{  fontFamily:"sans-serif"}}>Shop by Category</h2>
            <p style={{  fontFamily:"sans-serif", fontSize:"16px", fontWeight:"300",marginTop:"-10px",color:" #4F585E"}}>Products are handpicked by experts</p>
        </div>
        < ShopByCate />
    <div>
        <div>
            <h2 style={{  fontFamily:"sans-serif"}}>Lab Tests by Health Concern</h2>
            <p style={{  fontFamily:"sans-serif", fontSize:"16px", fontWeight:"300",marginTop:"-10px",color:" #4F585E"}}>Powered by Thyrocare
</p>
        </div>
          
        <div className="labTestByHealthConcern_home">
 <div><p><BsHandThumbsUp/> Recommended by health experts</p></div>
           <div><p>Report in 24 hrs</p></div>
           <div><p><VscHome/>Home Sample Pickup</p></div>
           <div><p><GrCompliance/>World Class Technologies & labs</p></div>
           <div><p><RiShieldCheckLine/>Highly Skilled Technicians</p></div>
           <div><p>100% Safe & Hygienic</p></div>
        </div>
    </div>
        <LabTestByHealthConcern />
        <ShopByConcern />
        <FrequentlyBookedLabtests />
        <NewLanches />
      <TrendingNearYou />
        </>
      );
    
}

export default Home;
