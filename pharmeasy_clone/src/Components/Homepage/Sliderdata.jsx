import React from "react";
import  ReactDOM  from "react-dom";
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



const Sliderdata = () => {
  
    const [data, setData]=React.useState([]);

    const getData  = async ()=>{
        try{
        let data= await fetch("http://localhost:8080/sliderdata");
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

    
      return (<>
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={data.length}
                visibleSlides={7}
              >
                <div className="sliderdata_silder"> 
                 <Slider >
                  <div style={{display:"flex" , height:"200px",width:"auto"}} >
     
         {data.map((product)=> (
       <Slide>
      <div className="silderData">
        <img style={{height:"60%", width:"100%"}} src={product.img} alt="" />
        <p className="silderData_heading">{product.head}</p>
        <p style={{color:"#F47779",margin:"auto"}}>{product.ptag}</p>
      </div>
      </Slide>

      )) } 
      </div >
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
  
  export default Sliderdata;