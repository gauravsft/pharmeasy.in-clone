import React from "react";
import "../component/Homepage/CSS_Components/home.css"
import Sliderdata from "../component/Homepage/Sliderdata";
import ShopByCategory from "../component/Homepage/ShopByCategory"
import OffersJustForYou from "../component/Homepage/OffersJustForYou";
import ShopByCencern from "../component/Homepage/ShopByCencern"
import FrequentlyBookedLabtests from "../component/Homepage/FrequentlyBookedLabtests"
import NewLaunches from "../component/Homepage/NewLaunches"
import TrendingNearYou  from "../component/Homepage/TrendingNearYou"
import ImmunityBoosters from "../component/Homepage/ImmunityBoosters"
import Slidereg from "../component/Homepage/Slidereg"
import PaytmOffer from "../component/Homepage/PaytmOffer";


export const Home= ()=> {


    return (
      <>
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
         <p style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"500",lineHeight:"24px",color:"#30363C",marginTop:"-15px"}}>Super charge your immunity with us</p>
   </div>
   <ImmunityBoosters/>
  


      </>
    );
}