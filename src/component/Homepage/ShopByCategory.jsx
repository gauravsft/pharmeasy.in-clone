import React from "react";
import "./CSS_Components/home.css"

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";


import {MdArrowBackIos} from 'react-icons/md';
import {MdArrowForwardIos} from 'react-icons/md';

const ShopByCategory = () => {

    const [data, setData]=React.useState([]);

    const getData  = async ()=>{
        try{
        let data= await fetch("http://localhost:8080/shopByCategory");
      let res= await data.json();
      setData(res)
   
        }
        catch(err){
            console.lohg(err)
        }
      

    }
    React.useEffect(()=>{
        getData();
    },[])
    


    return (
        <>
       <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={200}
                totalSlides={data.length}
                visibleSlides={6}
              >
             <div>
                 <Slider >
              <div style={{display:"flex" , gap:"70px",height:"350px",marginLeft:"20px"}} >
    
    
           {
      data.map((product)=> (
        <Slide style={{width:"200px",height:"350px"}}>
      <div style={{width:"160px",height:"45%",margin:"auto"}} className="shopByate_card">
        <img style={{width:"80%",height:"120px",margin:"auto"}} src={product.img} alt="" />
        <h3 style={{textAlign:"center"}}>{product.head}</h3>
       

      </div>
      </Slide>  
          )) } 
      </div>
      </Slider>
      
      <div style={{display:"flex" ,justifyContent:"space-between",border:"none",backgroundColor:"none",marginTop:"-125px"}}>
        <ButtonBack className="sliderdata_slider_button" > </ButtonBack>
        <ButtonNext className="sliderdata_slider_button" > </ButtonNext>
        </div>
        </div>
      </ CarouselProvider>

    </>
    )
  };
  
  export default ShopByCategory;