import React from "react";
import  ReactDOM  from "react-dom";
import "./CSS_Components/navbar.css"


import { BiUser} from 'react-icons/bi';
import {TbDiscount2 } from 'react-icons/tb';
import {AiOutlineMobile } from 'react-icons/ai';
import { BsCart2} from 'react-icons/bs';
import { BiChevronDown} from 'react-icons/bi';







const Navbar= ()=> {


    return (
      <>
      <div className="navbar">
       <div className="navbar-img_add">
      <div className="navbar-img">
        <img src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=360x0" alt="" />
      </div>
      <hr className="bar"></hr>
      <div className="navbar-add"> 
        <div className="navbar-add_img"> <img className="img_power" src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=32x0" alt="" /> <p>Express delivery to</p> </div>
        <div className="navbar-add_dis" > <p>
            411018 Pune</p>  <BiChevronDown style={{width:"20px", height:"20px"}}/></div>
      </div>
       </div>


       <div className="navbar_right">
     <div className="navbar_right_app"><AiOutlineMobile /><p>Download App</p></div>
      <div className="navbar_right_icons">< BiUser/><p>User</p></div>
      <div className="navbar_right_icons"><TbDiscount2/><p>Offer</p></div>
     <div className="navbar_right_icons"><BsCart2/><p>Cart</p></div> 
     
       </div>

      </div>  
     
      </>
    );
}
export default Navbar;