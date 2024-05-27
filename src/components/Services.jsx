import React from "react";
import aoDoanImg1 from "../assets/smile.gif";
import workIcon from "../assets/word.png";
import shapeOne from "../assets/shape-1.png";
import ppIcon from "../assets/powerpoint.png";
import excelIcon from "../assets/excel.png";
import canvaIcon from "../assets/canva.webp";
import capCutIcon from "../assets/capcut.png";
import photoShopIcon from "../assets/photoshop.png";
import { FiExternalLink } from "react-icons/fi";
import { IoMdFemale } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { LuCheckCheck } from "react-icons/lu";

const Services = () => {
  return (
     <section className="c-services c-section" id="is-about">
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
                                   <p>0853-098-234</p>
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
                         <span>Phần Mềm</span>
                    </h4>
                    <ul className="c-app__list">
                         <li>
                              <span>
                                   <img src={workIcon} alt="Word Icon" />
                              </span>
                         </li>
                         <li>
                              <span>
                                   <img src={ppIcon} alt="Power Point Icon" />
                              </span>
                         </li>
                         <li>
                              <span>
                                   <img src={excelIcon} alt="Excel Icon" />
                              </span>
                         </li>
                         <li>
                              <span>
                                   <img src={canvaIcon} alt="Canva Icon" />
                              </span>
                         </li>
                         <li>
                              <span>
                                   <img src={capCutIcon} alt="Capcut Icon" />
                              </span>
                         </li>
                         <li>
                              <span>
                                   <img src={photoShopIcon} alt="Photoshop Icon" />
                              </span>
                         </li>
                    </ul>
              </div>
              <div className="c-about4" id="is-experience">
                    <h4 className="c-about__title1">
                         <span>Kinh Nghiệm Làm Việc</span>
                    </h4>
                    <ul className="c-works__list">
                         <li>
                              <div className="c-works__left">
                                   <h4 className="c-works__role">
                                        Thực tập sinh Account Marketing <span>(Full time)</span>
                                   </h4>
                                   <div className="c-works__time">
                                         12/2023 - 4/2024
                                   </div>
                              </div>
                              <div className="c-works__right">
                                   <div className="c-works__company">
                                        <p>
                                             ADP Branding Agency
                                        </p>
                                        <a href="https://adpbrand.com/" target="_blank">
                                             adpbrand.com
                                             <span>
                                                  <FiExternalLink />
                                             </span>
                                        </a>
                                   </div>
                                   <ul className="c-responsibilities__list">
                                        <li>
                                             Hỗ trợ báo giá, soạn hợp đồng
                                        </li>
                                        <li>
                                             Viết recap cuộc họp
                                        </li>
                                        <li>
                                             Viết brief, tham gia đề xuất ý tưởng với khách hàng
                                        </li>
                                        <li>
                                             Tham gia tuyển dụng nhân sự
                                        </li>
                                        <li>
                                             Lên kế hoạch xây dựng fanpage
                                        </li>
                                        <li>
                                             Viết content, thiết kế ấn phẩm
                                        </li>
                                        <li>
                                             Hỗ trợ lên plan dự án
                                        </li>
                                   </ul>
                              </div>
                         </li>
                         <li>
                              <div className="c-works__left">
                                   <h4 className="c-works__role">
                                        Thực tập sinh Content Marketing <span>(Full time)</span>
                                   </h4>
                                   <div className="c-works__time">
                                         06/2023 - 11/2023
                                   </div>
                              </div>
                              <div className="c-works__right">
                                   <div className="c-works__company">
                                        <p>
                                             Công ty Cổ Phần Khải Hoàn Net
                                        </p>
                                        <a href="https://www.khnet.vn/" target="_blank">
                                             khnet.vn
                                             <span>
                                                  <FiExternalLink />
                                             </span>
                                        </a>
                                   </div>
                                   <ul className="c-responsibilities__list">
                                        <li>
                                             Thiết kế landing page
                                        </li>
                                        <li>
                                             Sáng tạo nội dung trên TikTok
                                        </li>
                                        <li>
                                             Thiết kế banner, edit video
                                        </li>
                                        <li>
                                             Phối hợp và hỗ trợ với team ads bán được 1500 đơn hàng
                                        </li>
                                   </ul>
                              </div>
                         </li>
                         <li>
                              <div className="c-works__left">
                                   <h4 className="c-works__role">
                                        Chuyên viên tư vấn <span>(Part time)</span>
                                   </h4>
                                   <div className="c-works__time">
                                         01/2023 - 05/2023
                                   </div>
                              </div>
                              <div className="c-works__right">
                                   <div className="c-works__company">
                                        <p>
                                             Công ty Cổ phần giáo dục Educa Corporation
                                        </p>
                                        <a href="https://edupia.vn/" target="_blank">
                                             edupia.vn
                                             <span>
                                                  <FiExternalLink />
                                             </span>
                                        </a>
                                   </div>
                                   <ul className="c-responsibilities__list">
                                        <li>
                                             Tiếp cận khách hàng thông qua hình thức Telesales, Zalo
                                        </li>
                                        <li>
                                             Tư vấn, giới thiệu và hợp tác với khách hàng
                                        </li>
                                        <li>
                                             Hỗ trợ chăm sóc khách hàng sau khi hợp tác
                                        </li>
                                        <li>
                                             Báo cáo công việc theo ngày
                                        </li>
                                        <li>
                                             Vượt 15% KPIs sau 1 tháng làm việc
                                        </li>
                                   </ul>
                              </div>
                         </li>
                         <li>
                              <div className="c-works__left">
                                   <h4 className="c-works__role">
                                        Hỗ trợ viên xử lý dữ liệu<span> (Part time)</span>
                                   </h4>
                                   <div className="c-works__time">
                                         07/2022 - 09/2022
                                   </div>
                              </div>
                              <div className="c-works__right">
                                   <div className="c-works__company">
                                        <p>
                                             Công ty TNHH BPO.MP
                                        </p>
                                        <a href="https://www.mpbpo.com.vn/" target="_blank">
                                             mpbpo.com.vn
                                             <span>
                                                  <FiExternalLink />
                                             </span>
                                        </a>
                                   </div>
                                   <ul className="c-responsibilities__list">
                                        <li>
                                             Nhập dữ liệu và xử lý thông tin tiếng Anh
                                        </li>
                                        <li>
                                             Tốc độ xử lý dữ liệu nhanh và độ chính xác cao
                                        </li>
                                   </ul>
                              </div>
                         </li>
                         <li>
                              <div className="c-works__left">
                                   <h4 className="c-works__role">
                                        Admin
                                   </h4>
                                   <div className="c-works__time">
                                         07/2022 - 09/2022
                                   </div>
                              </div>
                              <div className="c-works__right">
                                   <div className="c-works__company">
                                        <p>
                                             Dự án cá nhân - Khóa học onlines
                                        </p>
                                   </div>
                                   <ul className="c-responsibilities__list">
                                        <li>
                                             Quản lý fanpage
                                        </li>
                                        <li>
                                             Viết content, xây dựng hình ảnh
                                        </li>
                                        <li>
                                             Tư vấn, hỗ trợ khách hàng
                                        </li>
                                        <li>
                                             Truyền thông bán hàng trên fanpage 
                                        </li>
                                   </ul>
                              </div>
                         </li>
                    </ul>
              </div>
              <div className="c-about5">
                    <div className="c-about5__left">
                         <h5 className="c-about__title1">
                              <span>Hoạt động khác </span>
                         </h5>
                         <ul className="c-others__list">
                              <li>
                                   MC, PG các chương trình, sự kiện (Mobifone, Senka, ...)  - 2023
                              </li>
                              <li>
                                   Tình nguyên viên SEEN FESTIVAL - 07/2023
                                   <ul className="c-others__list2">
                                        <li>Hỗ trợ setup chương trình</li>
                                        <li>Điều phối khách mời</li>
                                   </ul>
                              </li>
                              <li>
                                   Tình nguyên viên TIẾP SỨC MÙA THI - 06/2022
                                   <ul className="c-others__list2">
                                        <li>Điều phối phụ huynh, học sinh</li>
                                        <li>Hỗ trợ tham gia lên kế hoạch cho chương trình </li>
                                   </ul>
                              </li>
                         </ul>
                    </div>
                    <div className="c-about5__right">
                         <div className="c-about5right__item">
                              <h5 className="c-about__title1">
                                   <span>Chứng chỉ </span>
                              </h5>
                              <ul className="c-certificate__list">
                                   <li>
                                        <p className="c-cer__desc1">TOEIC</p>
                                        <p className="c-cer__desc2">IIG cấp ngày 16/09/2023</p>
                                   </li>
                                   <li>
                                        <p className="c-cer__desc1">TIN HỌC VĂN PHÒNG NÂNG CAO</p>
                                        <p className="c-cer__desc2">Trung tâm Phát triển Phần mềm ĐHĐN cấp 12/04/2023</p>
                                   </li>
                              </ul>
                         </div>
                         <div className="c-about5right__item">
                              <h5 className="c-about__title1">
                                   <span>Khóa học bổ trợ</span>
                              </h5>
                              <ul className="c-certificate__list">
                                   <li>
                                        <p className="c-cer__desc1">CONTENT PYRAMID</p>
                                        <a href="https://center.gigan.vn/" className="c-cer__desc2">
                                             GIGAN TRAINING CENTER
                                             <span>
                                                  <FiExternalLink />
                                             </span>
                                        </a>
                                   </li>
                              </ul>
                         </div>
                    </div>
              </div>
        </div>
        <div className="section__deco section__deco2 deco__left">
            <img src={shapeOne} alt="Shape decoration" className="shape" />
        </div>
     </section>
  )
};

export default Services;
