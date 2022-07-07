import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./CSS_Components/home.css"

const Slidereg= () => {
  var settings = {
    dots: false,
    infinite: true,
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
          <img  style={{width:"460px",borderRadius:"10px"}} src="http://cms-contents.pharmeasy.in/banner/0307f367f86-MEDI22.jpg" alt="" />
          </div>
          <div className="slidereg_card" >
          <img style={{width:"460px",borderRadius:"10px"}} src="https://cms-contents.pharmeasy.in/banner/5470bad463b-PocketEasy_GRAND1000.jpg" alt="" />
          </div>
          <div className="slidereg_card"  >
          <img style={{width:"460px",borderRadius:"10px"}} src="https://cms-contents.pharmeasy.in/banner/517d7ee972f-App.jpg" alt="" />
          </div>
          <div className="slidereg_card"  >
          <img style={{width:"460px",borderRadius:"10px"}} src="https://cms-contents.pharmeasy.in/banner/cba69ac6ae6-HomepageBanner1.jpg" alt="" />
          </div>
          <div className="slidereg_card"  >
          <img style={{width:"460px",borderRadius:"10px"}} src="https://cms-contents.pharmeasy.in/banner/e81ec6343e2-HimalayaWellness_PrimaryMay.jpg" alt="" />
          </div>
          <div className="slidereg_card"  >
          <img style={{width:"460px",borderRadius:"10px"}} src="https://cms-contents.pharmeasy.in/banner/e2335fae090-Liveasy_diabetic_App.jpg" alt="" />
          </div>
          <div className="slidereg_card" >
          <img style={{width:"460px",borderRadius:"10px"}} src="https://cms-contents.pharmeasy.in/banner/7df3ec1a433-OneTouch_Primary_July.png" alt="" />
          </div>
          <div className="slidereg_card" >
          <img style={{width:"460px",borderRadius:"10px"}} src="https://cms-contents.pharmeasy.in/banner/0fe49d53961-HP.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );

}
export default Slidereg;