import React from "react";
import aoDoanImg1 from "../assets/smile.gif";

const Services = () => {
  return (<section className="c-services c-section" id="is-service">
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
                    </div>
              </div>
        </div>
  </section>
  )
};

export default Services;
