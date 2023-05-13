import img1 from "../../photos/img1.jpeg";
import img22 from "../../photos/img22.jpeg";
import img3 from "../../photos/img3.jpeg";
import img4 from "../../photos/img4.jpeg";
import img5 from "../../photos/img5.jpeg";
import "./Images.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Pagination } from "swiper";

const images = [img3, img22, img4, img1, img5];
const imgList = images.map((item) => (
  <SwiperSlide className="swiper-slide2">
    <img src={item} key={item} alt={item}></img>
  </SwiperSlide>
));

const Images = () => {
  
  return (
    <div>
      <h2>
        I believe a picture is worth more than words...
        <br />
      </h2>
      <div className="swip">
        <Swiper
        
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="swiper2"
        >
          {imgList}
        </Swiper>
      </div>
    </div>
  );
};

export default Images;
