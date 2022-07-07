import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./CSS_Components/home.css"

const LabTestByHealthConcern = () => {

    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      pauseOnHover: true,
    };

    const [data, setData]=React.useState([]);

    const getData  = async ()=>{
        try{
        let data= await fetch("http://localhost:8080/labTestByHealthConcern");
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
  
      <div style={{display:"flex"}} >
        
           {
      data.map((product)=> (
       <Slider {...settings}>
      <div style={{width:"190px"}} >
        <img  style={{height:"150px", width:"150px",borderRadius:"10px"}} src={product.img} alt="" />
    
      </div> </Slider>
      )) }
      </div>
    )
  };
  
  export default LabTestByHealthConcern;