import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./CSS_Components/home.css"

// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext
// } from "pure-react-carousel";

// const Slidereg= () => {
 

//     return (
//       <CarouselProvider
//         naturalSlideWidth={100}
//         naturalSlideHeight={125}
//         totalSlides={5}
//         visibleSlides={1.5}
//       >
      
//         <Slider >

//         <Slide> 
//            <img  src="https://cms-contents.pharmeasy.in/banner/0307f367f86-MEDI22.jpg" alt="" />
//         </Slide>
//         <Slide> 
//         <img  src="https://cms-contents.pharmeasy.in/banner/5470bad463b-PocketEasy_GRAND1000.jpg" alt="" />
//         </Slide>
//         <Slide>
//         <img  src="https://cms-contents.pharmeasy.in/banner/517d7ee972f-App.jpg" alt="" />
//         </Slide>
//         <Slide>
//           <img src="https://cms-contents.pharmeasy.in/banner/cba69ac6ae6-HomepageBanner1.jpg" alt="" />
//           </Slide>
//           <Slide>
//              <img src="https://cms-contents.pharmeasy.in/banner/e81ec6343e2-HimalayaWellness_PrimaryMay.jpg" alt="" />
//              </Slide>
//              <Slide>
//               <img src="https://cms-contents.pharmeasy.in/banner/e2335fae090-Liveasy_diabetic_App.jpg" alt="" />
//               </Slide>
//               <Slide>
//                 <img src="https://cms-contents.pharmeasy.in/banner/7df3ec1a433-OneTouch_Primary_July.png" alt="" />
//                 </Slide>
//                 <Slide>
//                     <img  src="https://cms-contents.pharmeasy.in/banner/0fe49d53961-HP.jpg" alt="" />
//                     </Slide>
//         </Slider>
       
//         <ButtonBack> Button Back</ButtonBack>
//         <ButtonNext>Button Next</ButtonNext>
//       </CarouselProvider>
//     );
// }

// export default Slidereg;
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
          <img  style={{width:"250px"}} src="https://cms-contents.pharmeasy.in/banner/0307f367f86-MEDI22.jpg" alt="" />
          </div>
          <div className="slidereg_card" >
          <img  src="https://cms-contents.pharmeasy.in/banner/5470bad463b-PocketEasy_GRAND1000.jpg" alt="" />
          </div>
          <div className="slidereg_card"  >
          <img  src="https://cms-contents.pharmeasy.in/banner/517d7ee972f-App.jpg" alt="" />
          </div>
          <div className="slidereg_card"  >
          <img src="https://cms-contents.pharmeasy.in/banner/cba69ac6ae6-HomepageBanner1.jpg" alt="" />
          </div>
          <div className="slidereg_card"  >
          <img src="https://cms-contents.pharmeasy.in/banner/e81ec6343e2-HimalayaWellness_PrimaryMay.jpg" alt="" />
          </div>
          <div className="slidereg_card"  >
          <img src="https://cms-contents.pharmeasy.in/banner/e2335fae090-Liveasy_diabetic_App.jpg" alt="" />
          </div>
          <div className="slidereg_card" >
          <img src="https://cms-contents.pharmeasy.in/banner/7df3ec1a433-OneTouch_Primary_July.png" alt="" />
          </div>
          <div className="slidereg_card" >
          <img  src="https://cms-contents.pharmeasy.in/banner/0fe49d53961-HP.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );

}
export default Slidereg;