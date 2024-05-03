import React from "react";
import aoDoanImg1 from "../assets/smile.gif";
// import arrowImg1 from "../assets/arrow_img1.png"
import { IoMdFemale } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { LuCheckCheck } from "react-icons/lu";

const Services = () => {
  return (
     <section className="c-services c-section" id="is-service">
         <h2 className="c-title1">
              About Me
         </h2>
         <p className="c-title1__sub">
              <span>Thông tin</span> về tôi
         </p>
        <div className="c-service__container l-container">
              <div className="c-about1__row1">
                    <div className="c-about1__avatar">
                         <div className="c-avatar1">
                              <img src={aoDoanImg1} alt="Thanh Ngoc Tran" />
                         </div>
                         {/* <div className="c-arrow1">
                              <img src={arrowImg1} alt="White Arrow" />
                         </div> */}
                    </div>
                    <div className="c-about1__right">
                         <p className="c-about1__desc">
                              Em là một sinh viên mới ra trường có nhiều khát khao và mong muốn trở thành một nhân viên ưu tú tại công ty trong tương lai.<br />
                              Được làm việc trong một môi trường ổn định, có thể gắn bó lâu dài và thăng tiến trong công ty đó là mong muốn của em. Em sẽ cố gắng hết sức trẻ của mình để quý công ty phát triển hơn.
                         </p>
                         <ul className="c-about1__links">
                              <li>      
                                   <span>
                                   <IoMdFemale />
                                   </span>
                                   <p>01-05-2002</p>
                              </li>
                              <li>      
                                   <span className="c-phone1">
                                   <FaPhoneAlt />
                                   </span>
                                   <p>0853098234</p>
                              </li>
                              <li>      
                                   <span>
                                   <IoIosMail />
                                   </span>
                                   <p>ngocthanhtran1106@gmail.com</p>
                              </li>
                              <li>      
                                   <span>
                                   <MdPlace />
                                   </span>
                                   <p>Quận Cẩm Lệ, Tp Đà Nẵng</p>
                              </li>
                              <li>      
                                   <span>
                                   <FaGraduationCap />
                                   </span>
                                   <p>Trường Đại học Kinh Tế Đà Nẵng</p>
                              </li>
                         </ul>
                    </div>
              </div>
              <div className="c-about2">
                    <h4 className="c-about__title1">
                         <span>Kỹ Năng</span>
                    </h4>
                    <ul className="c-skill__list">
                         <li>
                              <span><LuCheckCheck /></span>
                              <p>Kỹ năng giao tiếp</p>
                         </li>
                         <li>
                              <span><LuCheckCheck /></span>
                              <p>Kỹ năng làm báo cáo</p>
                         </li>
                         <li>
                              <span><LuCheckCheck /></span>
                              <p>Kỹ năng làm việc nhóm</p>
                         </li>
                         <li>
                              <span><LuCheckCheck /></span>
                              <p>Kỹ năng đàm phán</p>
                         </li>
                         <li>
                              <span><LuCheckCheck /></span>
                              <p>Kỹ năng phân tích dữ liệu</p>
                         </li>
                         <li>
                              <span><LuCheckCheck /></span>
                              <p>Kỹ năng quản lý thời gian</p>
                         </li>
                         <li>
                              <span><LuCheckCheck /></span>
                              <p>Kỹ năng thiết kế, edit video</p>
                         </li>
                         <li>
                              <span><LuCheckCheck /></span>
                              <p>Kỹ năng tìm kiếm và nghiên cứu</p>
                         </li>
                         <li>
                              <span><LuCheckCheck /></span>
                              <p>Kỹ năng tin học văn phòng tốt</p>
                         </li>
                         <li>
                              <span><LuCheckCheck /></span>
                              <p>Kỹ năng sử dụng ngoại ngữ </p>
                         </li>
                         <li>
                              <span><LuCheckCheck /></span>
                              <p>SEO</p>
                         </li>
                    </ul>
              </div>
              <div className="c-about3">
                    <h4 className="c-about__title1">
                         <span>Phần mềm</span>
                    </h4>   
              </div>
        </div>
  </section>
  )
};

export default Services;
