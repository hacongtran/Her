import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import khaiHoanNet from "../assets/khai_hoan_net.png";
import adpLogo from "../assets/adp_logo.png";
import workLogo from "../assets/works.png";






import { PiDotFill } from "react-icons/pi";
import {projects, others} from "../Data";
import { FiExternalLink } from "react-icons/fi";




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
                                    autoplay={{
                                        delay: 3000,
                                        pauseOnMouseEnter: true,
                                    }}
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
                                modules={[Autoplay, Pagination]}
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
                        <li className="c-project__item2">
                            <div className="c-proitem2__title">
                                <span className="c-span1">
                                  <PiDotFill />
                                </span>
                                <h5>Thiết kế landing page</h5>
                            </div>
                            <div className="c-proitem2__row">
                              <p className="c-proitem2__uses c-proitem2__uses1">
                                 Công cụ sử dụng: 
                              </p>
                              <div className="c-proitem2__programs">
                                  <span>Ladipage.vn</span>
                              </div>
                            </div>
                              <div className="c-project__webs">
                                    <p className="c-prowebs__left">
                                        Một số website landing page đã thực hiện:
                                    </p>
                                    <ul className="c-prowebs__list">
                                        <li>
                                            <a href="https://www.skinever.asia/tinh-chat-houmal" target='_blank'>
                                                https://skinever.asia/tinh-chat-houmal
                                                <span>
                                                    <FiExternalLink />
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.skinever.asia/sua-rua-mat-sieu-bot-syrinx" target='_blank'>
                                                https://skinever.asia/sua-rua-mat-sieu-bot-syrinx
                                                <span>
                                                    <FiExternalLink />
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.skinever.asia/tinh-chat-golden-peony" target='_blank'>
                                                https://skinever.asia/tinh-chat-golden-peony
                                                <span>
                                                    <FiExternalLink />
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                              </div>

                        </li> 
                        <li className="c-project__item2">
                            <div className="c-proitem2__title">
                                <span className="c-span1">
                                  <PiDotFill />
                                </span>
                                <h5>Thiết kế, edit video cho việc chạy ads</h5>
                            </div>
                            <div className="c-proitem2__row">
                              <p className="c-proitem2__uses c-proitem2__uses1">
                                 Công cụ sử dụng: 
                              </p>
                              <div className="c-proitem2__programs">
                                  <span>Capcut</span>
                              </div>
                            </div>
                            <ul className="c-videos__list">
                                <li className="c-video__item">
                                    <iframe src="https://www.youtube.com/embed/xJUNLE7kJRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </li>    
                                <li className="c-video__item">
                                    <iframe src="https://www.youtube.com/embed/gPc3PI8kwtw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </li>    
                            </ul>    

                        </li> 
                        <li className="c-project__item2">
                            <div className="c-proitem2__title">
                                <span className="c-span1">
                                  <PiDotFill />
                                </span>
                                <h5>Lên content, kịch bản cho việc quay dựng video</h5>
                            </div>
                            <div className="c-google__excel">
                                <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSgPLJX6KAW0uIJ3RRTin4bg3zZKyphOznbdfbYLrKHXs6g2b8kT_VTBBgrc8qcw7Up8mCD9xJ-YBk_/pubhtml?widget=true&amp;headers=false"></iframe>
                            </div>
                        </li> 
                    </ul>
                </li>
                <li>
                    <div className="c-project__brand">
                          <div className="c-project__top c-project__top2">
                              <img src={adpLogo} alt="Khải Hoàn Net logo" />
                          </div>
                          <h4 className="c-projecttop__title c-projecttop__title2">
                              CÔNG TY CP XÂY DỰNG<br>
                              </br> VÀ PHÁT TRIỂN THƯƠNG HIỆU ADP 
                          </h4>
                    </div>
                    <ul className="c-project__list2">
                        <li className="c-project__item2">
                            <div className="c-proitem2__title">
                                <span className="c-span1">
                                  <PiDotFill />
                                </span>
                                <h5>Hỗ trợ báo giá, soạn hợp đồng, viết báo cáo, brief</h5>
                            </div>
                            <div className="c-google__excel c-google__excel2">
                                <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vREFPG6Ws-p98D-7XQPHqt8Q8jP59dbMy-FIF33LcGrtKM82rpBcaIKyR3WcZFz-Zi1TtUijAf9SQyY/pubhtml?widget=true&amp;headers=false"></iframe>
                            </div>    
                        </li> 
                        <li className="c-project__item2">
                            <div className="c-proitem2__title">
                                <span className="c-span1">
                                  <PiDotFill />
                                </span>
                                <h5>Tham gia phỏng vấn, tuyển dụng thực tập sinh</h5>
                            </div>
                            <div className="c-google__excel c-google__excel2 c-google__excel3">
                                <iframe class="custom-iframe" src="https://docs.google.com/document/d/e/2PACX-1vSd5AXHMZpkYWtEFGV2W4W5NrjfgaHlbfdLQb9PQgv8EotTb4bcVOywtf3FUWlBs6cDdGGbPvRQ_hk7/pub?embedded=true"></iframe>
                            </div>    
                        </li> 
                    </ul>
                </li>
                <li>
                    <div className="c-project__brand">
                          <div className="c-project__top c-project__top3">
                              <img src={workLogo} alt="Công việc khác" />
                          </div>
                          <h4 className="c-projecttop__title c-projecttop__title3">
                                Các công việc khác:
                          </h4>
                    </div>
                    <div className="c-other__container">
                        <Swiper 
                                autoplay={{
                                    delay: 50000,
                                    pauseOnMouseEnter: true,
                                }}
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
                                modules={[Autoplay, Pagination]}
                                className="c-banner__list mySwiper"
                            >
                                {others.map(({ img, alt, logo, logoAlt, name, desc, link, linkText }, index) => (
                                    <SwiperSlide key={index} className="c-others__slider">
                                        <div className="c-others__item">
                                            <div className="c-others__image">
                                                <img src={img} alt={alt} />
                                                <div className={`c-others__logo c-others__logo${index + 1}`}>
                                                    <img src={logo} alt={logoAlt} />
                                                </div>
                                            </div>
                                            <div className="c-others__bottom">
                                                <h5 className="c-othersbottom__name">
                                                    {name}
                                                </h5>
                                                <p className="c-othersbottom__desc">
                                                    {desc}
                                                </p>
                                                {link && (
                                                    <a href={link} target='_blank' rel="noopener noreferrer" className="c-link">
                                                        <span className="c-link__txt">
                                                            {linkText}
                                                        </span>
                                                        <span className="c-link__icon">
                                                            <FiExternalLink />
                                                        </span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>

                </li>
            </ul>
         </div>
    </section>
  )
}

export default Project