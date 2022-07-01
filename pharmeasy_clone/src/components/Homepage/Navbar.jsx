import React from "react"
import styled from "styled-components";
import "./css Components/navbar.css"

import {FaMobileAlt } from 'react-icons/fa';
import {FaRegUser } from 'react-icons/fa';
import {TbDiscount2 } from 'react-icons/tb';
import {BsCart2 } from 'react-icons/bs';
import {RiSearchLine} from 'react-icons/ri';

const  Navbar = () =>{
  
    return(<>
    <div className="main_navbar" >
    <div className="main_navbar_box" >
     <div ><img src='https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=360x0' alt="" style={{cursor:'pointer' }}>
   </img></div>
    
<div > <img src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=32x0" alt="" style={{ width:"20px", heigth:"10px"}}></img><p>express
     Express delivery to</p>
     <p>Address</p></div>


   </div>

   <div className="navbar_rightSide">
	<p> <FaMobileAlt/>Download App</p>
<p><FaRegUser/>User</p>
<p><TbDiscount2/>Offers</p>
<p><BsCart2/>Cart</p>

  
   </div>
   </div>

   <div className="below_navbar_box">
        <div className="below_navbar_box_topslide">
            <div>
                <h2>What are you looking for?</h2>
            </div>
            <div>
                <p>Order with prescription. </p>
                <p>UPLOAD NOW</p>
            </div>
        </div>
        <div>
        <RiSearchLine/><input type="text" name="" id="" />
            <button>Search</button>
        </div>
      </div>
   
        </>)
}

//npm install react-multi-carousel --save

export default Navbar;

