import React from "react";
import  ReactDOM  from "react-dom";
import "./Homepage/CSS_Components/home.css"
import Navbar from "./Homepage/Navbar"
import BelowNav from "./Homepage/BelowNav";
import Sliderdata from "./Homepage/Sliderdata";
import ShopByCategory from "./Homepage/ShopByCategory"
import LabTestByHealthConcern from "./Homepage/LabTestByHealthConcern"
import OffersJustForYou from "./Homepage/OffersJustForYou";
import ShopByCencern from "./Homepage/ShopByCencern"
import FrequentlyBookedLabtests from "./Homepage/FrequentlyBookedLabtests"
import NewLaunches from "./Homepage/NewLaunches"
import TrendingNearYou  from "./Homepage/TrendingNearYou"
import ImmunityBoosters from "./Homepage/ImmunityBoosters"
import Slidereg from "./Homepage/Slidereg"


const Home= ()=> {


    return (
      <>
      <Navbar />
      <BelowNav />
      <Sliderdata />
      <Slidereg/>
      <div>
        <h2 style={{fontFamily:"sans-serif"}}>Offers Just For You</h2>
      </div>
      <OffersJustForYou/>
      <div>
        <h2 style={{fontFamily:"sans-serif"}}>Lab Tests By Health Concern</h2>
      </div>
   <LabTestByHealthConcern />
    <div>
        <h2 style={{fontFamily:"sans-serif"}}>Shop By Concern</h2>
        <p style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"500",lineHeight:"24px",color:"#30363C"}}>Products are handpicked by experts</p>
      </div>
<ShopByCencern/>
<div style={{display:"flex", justifyContent:"space-between" }}>
        <h2 style={{fontFamily:"sans-serif"}}>Frequently Booked Lab Tests</h2>
        <p style={{color:"#10847E",fontFamily:"sans-serif",fontSize:"18px",fontWeight:"700",lineHeight:"24px",cursor:"pointer"}}>View All</p>
         </div>
         <FrequentlyBookedLabtests/>
         <div>
        <h2 style={{fontFamily:"sans-serif"}}>New Launches</h2>
        <p style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"500",lineHeight:"24px",color:"#30363C"}}>New wellness range just for you!</p>
      </div>
      <NewLaunches />
      <div>
        <h2 style={{fontFamily:"sans-serif"}}>Payment Offers</h2>
      </div>

      <div style={{display:"flex", marginBottom:"20px",gap:"30px" }}> 
        <img className="image_sliderbox" src="https://cdn01.pharmeasy.in/dam/banner/banner/bb9b358232d-PAYTM-02.jpg?dim=1440x0" alt="" />
        <img className="image_sliderbox" src="https://cdn01.pharmeasy.in/dam/banner/banner/1412bb76dee-AMAZONPAY.jpg?dim=1440x0" alt="" />
        <img className="image_sliderbox" src="https://cdn01.pharmeasy.in/dam/banner/banner/fe38d14f0a0-PHONEPE.jpg?dim=1440x0" alt="" />
        <img className="image_sliderbox" src="https://cdn01.pharmeasy.in/dam/banner/banner/2a0795e595e-MOBIKWIK.jpg?dim=1440x0" alt="" />
        <img className="image_sliderbox" src="https://cdn01.pharmeasy.in/dam/banner/banner/e1bf5c7dae5-FREECHARGE-02.jpg?dim=1440x0" alt="" />
        <img className="image_sliderbox" src="https://cdn01.pharmeasy.in/dam/banner/banner/a20dea5ddad-OLA-MONEY-02.jpg?dim=1440x0" alt="" />
        <img className="image_sliderbox" src="https://cdn01.pharmeasy.in/dam/banner/banner/7297689b914-AIRTEL.jpg?dim=1440x0" alt="" />
      </div>
      <div>
        <h2 style={{fontFamily:"sans-serif"}}>Trending Near you</h2>
        <p style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"500",lineHeight:"24px",color:"#30363C"}}>Populer In your City</p>
      </div>
<TrendingNearYou />
<div style={{display:"flex", justifyContent:"space-between" }}>
        <h2 style={{fontFamily:"sans-serif"}}>Immunity Boosters</h2>
        <p style={{color:"#10847E",fontFamily:"sans-serif",fontSize:"18px",fontWeight:"700",lineHeight:"24px",cursor:"pointer"}}>View All</p>
         </div>
         <p style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"500",lineHeight:"24px",color:"#30363C"}}>Super charge your immunity with us</p>
   <ImmunityBoosters/>
   <ShopByCategory />


      </>
    );
}
export default Home;