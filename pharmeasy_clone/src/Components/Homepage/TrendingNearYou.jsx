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
const TrendingNearYou = () => {

    const [data, setData]=React.useState([]);

    const getData  = async ()=>{
        try{
        let data= await fetch("http://localhost:8080/trendingNearYou");
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
      naturalSlideHeight={125}
      totalSlides={data.length}
      visibleSlides={4}
    >
      <div className=""> 
       <Slider>
      <div style={{display:"flex",gap:"10px" }} >
           {
      data.map((product)=> (
      <Slide>
      <div className="newLaunched_card">
          <img className="newLaunched_card_img" style={{width:"80%", height:"120px",margin:"auto"}} src={product.img} alt="" />
         <h4 style={{fontFamily:"sans-serif",color:"black", letterSpacing:"0.6px"}}>{product.heading}</h4> 
         <p style={{fontFamily:"sans-serif",color:"#30363C",fontSize:"16px"}}>{product.ptag}</p>
         <div style={{display:"flex",gap:"5px",marginTop:"-30px"}}>
          <h4 style={{fontFamily:"sans-serif",color:"#6c6e6f",textDecoration:"line-through"}}>{product.mrpTag}</h4>
          <h4  style={{fontFamily:"sans-serif",color:"#6c6e6f",textDecoration:"line-through"}}>{product.mrpPrice}</h4>

         </div>
         
            <div  style={{display:"flex",justifyContent:"space-between",marginTop:"-36px"}}>
            <h4  style={{fontFamily:"sans-serif",color:"black"}}>{product.actualPrice}</h4>
            <h4 style={{color:"#F47779",fontFamily:"sans-serif" }}>{product.offer}</h4>   
       </div>
      </div> </Slide> 
      )) } 
      </div>
      </Slider>
      <div style={{display:"flex" ,justifyContent:"space-between",border:"none",backgroundColor:"none",marginTop:"-125px"}}>
        <ButtonBack className="sliderdata_slider_button" ><MdArrowBackIos/> </ButtonBack>
        <ButtonNext className="sliderdata_slider_button" ><MdArrowForwardIos/> </ButtonNext>
        </div>
      </div>
      </CarouselProvider>
      </>
    )
  };
  
  export default TrendingNearYou ;

