import React from 'react'
import './testimonials.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h5>Review from clients and employers</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src="" alt="" />
          </div>
          <h5 className='client__name'>client name 1</h5>
          <small className='client__review'> ssffafsafafasfafasfasfafodshfuodshuodshuodshfuo foihasoifhasofhiosafhasofh oi hiohioashfioasfhasioh oi dhoiashfaiosfhioashfioasfhsioafhaso dohasohoasfh</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src="" alt="" />
          </div>
          <h5 className='client__name'>client name 1</h5>
          <small className='client__review'> ssffafsafafasfafasfasfafodshfuodshuodshuodshfuo foihasoifhasofhiosafhasofh oi hiohioashfioasfhasioh oi dhoiashfaiosfhioashfioasfhsioafhaso dohasohoasfh</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src="" alt="" />
          </div>
          <h5 className='client__name'>client name 1</h5>
          <small className='client__review'> ssffafsafafasfafasfasfafodshfuodshuodshuodshfuo foihasoifhasofhiosafhasofh oi hiohioashfioasfhasioh oi dhoiashfaiosfhioashfioasfhsioafhaso dohasohoasfh</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials