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
import PaytmOffer from "./Homepage/PaytmOffer";


const Home= ()=> {


    return (
      <>
      <Navbar />
      <BelowNav />
      <Sliderdata />
      <Slidereg/>
      <div style={{
        width:"95%",
        margin:"auto",
        marginTop:"30px"
      }}>
        <h2 style={{fontFamily:"sans-serif",marginTop:"30px"}}>Offers Just For You</h2>
      </div>
      <OffersJustForYou/>
      <div style={{
        width:"97%",
        margin:"auto",
        marginTop:"30px"
      }}>
        <h2 style={{fontFamily:"sans-serif"}}>Shop By Category</h2>
      </div>
 <ShopByCategory />
      <div style={{
        width:"95%",
        margin:"auto",
        marginTop:"30px"
      }}>
        <h2 style={{fontFamily:"sans-serif"}}>Lab Tests By Health Concern</h2>
      </div>

   <LabTestByHealthConcern />
    <div style={{
        width:"95%",
        margin:"auto",
        marginTop:"30px"
      }}>
        <h2 style={{fontFamily:"sans-serif"}}>Shop By Concern</h2>
        <p style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"500",lineHeight:"24px",color:"#30363C"}}>Products are handpicked by experts</p>
      </div>
<ShopByCencern/>
<div style={{display:"flex", justifyContent:"space-between",    width:"95%",
        margin:"auto",
        marginTop:"30px"}}>
        <h2 style={{fontFamily:"sans-serif"}}>Frequently Booked Lab Tests</h2>
        <p style={{color:"#10847E",fontFamily:"sans-serif",fontSize:"18px",fontWeight:"700",lineHeight:"24px",cursor:"pointer"}}>View All</p>
         </div>
         <FrequentlyBookedLabtests/>
         <div style={{
        width:"92.5%",
        margin:"auto",
        marginTop:"60px"
      }}>
        <h2 style={{fontFamily:"sans-serif"}}>New Launches</h2>
        <p style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"500",lineHeight:"24px",color:"#30363C"}}>New wellness range just for you!</p>
      </div>
      <NewLaunches />
      <div style={{
        width:"95%",
        margin:"auto",
        marginTop:"60px"
      }}>
        <h2 style={{fontFamily:"sans-serif"}}>Payment Offers</h2>
      </div>

    <PaytmOffer/>
      <div style={{
        width:"92.6%",
        margin:"auto",
        marginTop:"30px"
      }}>
        <h2 style={{fontFamily:"sans-serif"}}>Trending Near you</h2>
        <p style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"500",lineHeight:"24px",color:"#30363C"}}>Populer In your City</p>
      </div>
<TrendingNearYou />
<div style={{
        width:"95%",
        margin:"auto",
        marginTop:"30px"
       }}>
<div style={{display:"flex", justifyContent:"space-between",
        margin:"auto",
       }}>
        <h2 style={{fontFamily:"sans-serif"}}>Immunity Boosters</h2>
        <p style={{color:"#10847E",fontFamily:"sans-serif",fontSize:"16px",fontWeight:"600",lineHeight:"24px",cursor:"pointer"}}>View All</p>
         </div>
         <p style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"500",lineHeight:"24px",color:"#30363C"}}>Super charge your immunity with us</p>
   </div>
   <ImmunityBoosters/>
  


      </>
    );
}
export default Home;