import React from "react";
import  ReactDOM  from "react-dom";
import "./CSS_Components/home.css"


import {HiOutlineClipboardList } from 'react-icons/hi';
import {BsSearch} from 'react-icons/bs';


const BelowNav= ()=> {


    return (
      <>
 <div className="below_navbar">
 <div className="below_navbar_headingdiv">
     <div> <h2>What are you looking for?</h2> </div>
     <div style={{display:"flex",gap:"10px"}}> 
         <div style={{display:"flex",alignItems:"center"}}><HiOutlineClipboardList/><p>Order with prescription.</p></div>
        <div style={{display:"flex",alignItems:"center"}}><p style={{color:"#10847E",fontFamily:"sans-serif",fontSize:"14px",fontWeight:"600",lineHeight:"24px"}}>UPLOAD NOW </p></div> 
     </div>
 </div>
 <div className="search_bar">
      <BsSearch style={{border:"none",padding:"5px"}}/>
     <input style={{border:"none",width:"85%",marginLeft:"-20px",boxSizing:"border-box",outline:"solid #fc0 0",height:"3em"}} type="text" />
     <button className="search_bar_but">Search</button>
 </div>
</div></>
    )
}
export default BelowNav;









