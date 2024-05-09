import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import khaiHoanNet from "../assets/khai_hoan_net.png";
import { PiDotFill } from "react-icons/pi";
import {projects} from "../Data";



const Project = () => {
  return (
    <section className="c-projects c-section" id="is-project">
        <h2 className="c-title1">
              My projects
         </h2>
         <p className="c-title1__sub">
              <span>Dự án</span> của tôi
         </p>
         <div className="l-container">
            <ul className="c-project__list">
                <li>
                    <div className="c-project__brand">
                          <div className="c-project__top c-project__top1">
                              <img src={khaiHoanNet} alt="Khải Hoàn Net logo" />
                          </div>
                          <h4 className="c-projecttop__title c-projecttop__title1">
                              Công Ty Cổ phần Khải Hoàn Net
                          </h4>
                    </div>
                    <ul className="c-project__list2">
                        <li className="c-project__item2">
                            <div className="c-proitem2__title">
                                <span className="c-span1">
                                  <PiDotFill />
                                </span>
                                <h5>Thiết kế banner quảng cáo</h5>
                            </div>
                            <div className="c-proitem2__row">
                              <p className="c-proitem2__uses c-proitem2__uses1">
                                 Phần mềm sử dụng: 
                              </p>
                              <div className="c-proitem2__programs">
                                  <span>Canva</span>
                              </div>
                            </div>
                            <Swiper 
                                    pagination={{
                                         clickable: true,
                                    }}
                                    breakpoints={{
                                    540: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    }}
                                modules={[Pagination]}
                                className="c-banner__list mySwiper">
                                {projects.map(({img, alt},index) => {
                                    return(
                                        <SwiperSlide className="c-banner__item c-banner__item1">
                                             <img src={img} alt={alt} />
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </li> 
                    </ul>
                </li>
            </ul>
         </div>
    </section>
  )
}

export default Project