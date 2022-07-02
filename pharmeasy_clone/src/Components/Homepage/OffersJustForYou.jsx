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


const OffersJustForYou = () => {

    const [data, setData]=React.useState([]);

    const getData  = async ()=>{
        try{
        let data= await fetch("http://localhost:8080/offersJustForYou");
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
                naturalSlideHeight={200}
                totalSlides={data.length}
                visibleSlides={2}
              >
                <div  > 
                 <Slider >
                 <div style={{display:"flex" , height:"200px",width:"auto"}} >
    
           {
      data.map((product)=> (
        <Slide style={{width:"350px"}}>
      <div className="offersJustForYou_card">
        <img style={{height:"50px", width:"50px",borderRadius:"10px",padding:"10px"}} src={product.img} alt="" />
        <p style={{width:"200px",padding:"10px"}}>{product.pTag}</p>

      </div>
            </Slide>
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
  
  export default OffersJustForYou;