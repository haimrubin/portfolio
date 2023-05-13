import "./ProjectSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination } from "swiper";

const ProjectSlider = (props) => {
  const slides = props.projects.map((item) => (
    <SwiperSlide>{item}</SwiperSlide>
  ));
  const screenWidth = window.innerWidth;
  let slidesPerView = 3;
  if (screenWidth < 640) {
    slidesPerView = 1;
  }
  return (
    <div className="container">
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
        {slides}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
