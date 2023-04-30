import img1 from "../../photos/img1.jpeg";
import img22 from "../../photos/img22.jpeg";
import img3 from "../../photos/img3.jpeg";
import img4 from "../../photos/img4.jpeg";
import img5 from "../../photos/img5.jpeg";
import "../ProjectSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination } from "swiper";

const images = [img3, img22, img4, img1, img5];
const imgList = images.map((item) => (
  <SwiperSlide>
    <img src={item} key={item}></img>
  </SwiperSlide>
));

const Images = () => {
  const screenWidth = window.innerWidth;
  let slidesPerView = 3;
  if (screenWidth < 640) {
    slidesPerView = 1;
  }
  return (
    <>
      <h2>I believe a picture is worth more than words...</h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        {imgList}
      </Swiper>
    </>
  );
};

export default Images;
