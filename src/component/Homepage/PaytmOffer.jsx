import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./CSS_Components/home.css"

const PaytmOffer= () => {
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true
  };

    return (
      <div >
        <Slider   className="slidereg_box" {...settings}>
          <div className="slidereg_card">
          <img  style={{width:"460px",borderRadius:"8px"}} src="https://cdn01.pharmeasy.in/dam/banner/banner/bb9b358232d-PAYTM-02.jpg?dim=1440x0" alt="" />
          </div>
          <div className="slidereg_card" >
          <img style={{width:"460px",borderRadius:"8px"}} src="https://cdn01.pharmeasy.in/dam/banner/banner/1412bb76dee-AMAZONPAY.jpg?dim=1440x0"  alt="" />
          </div>
          <div className="slidereg_card"  >
          <img style={{width:"460px",borderRadius:"8px"}} src="https://cdn01.pharmeasy.in/dam/banner/banner/fe38d14f0a0-PHONEPE.jpg?dim=1440x0" alt="" />
          </div>
          <div className="slidereg_card"  >
          <img style={{width:"460px",borderRadius:"8px"}} src="https://cdn01.pharmeasy.in/dam/banner/banner/2a0795e595e-MOBIKWIK.jpg?dim=1440x0" alt="" />
          </div>
          <div className="slidereg_card"  >
          <img style={{width:"460px",borderRadius:"8px"}}  src="https://cdn01.pharmeasy.in/dam/banner/banner/e1bf5c7dae5-FREECHARGE-02.jpg?dim=1440x0" alt="" />
          </div>
          <div className="slidereg_card"  >
          <img style={{width:"460px",borderRadius:"8px"}} src="https://cdn01.pharmeasy.in/dam/banner/banner/a20dea5ddad-OLA-MONEY-02.jpg?dim=1440x0" alt="" />
          </div>
          <div className="slidereg_card" >
          <img style={{width:"460px",borderRadius:"8px"}} src="https://cdn01.pharmeasy.in/dam/banner/banner/7297689b914-AIRTEL.jpg?dim=1440x0" alt="" />
          </div>
        </Slider>
      </div>
    );

}
export default PaytmOffer;
