import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import sunGlassesModel1 from '../assets/img/sunGlassesModel1.png'
import sunGlassesModel2 from '../assets/img/sunGlassesModel2.png'

import 'swiper/css';
import 'swiper/css/autoplay'

export function SectionSlider(){
	return(
		<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper swiperCustom"
      >
        <SwiperSlide><img src={sunGlassesModel1}/></SwiperSlide>
        <SwiperSlide><img src={sunGlassesModel2}/></SwiperSlide>
      </Swiper>
		)
}