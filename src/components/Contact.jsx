import React from 'react'
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from "react-icons/fa";





const Contact = () => {
  return (
    <section className="c-contact c-section" id="is-contact">
        <div className="l-container">
            <h2 className="c-title1">
              Contact Me
            </h2>
            <p className="c-title1__sub">
                <span>Liên lạc</span> cho tôi
            </p>
            <div className="c-contact__container">
                <div className="c-contact__content">
                    <div className="c-contact__card">
                        <span className="c-contact__card-icon">
                            <FaRegMap />
                        </span>
                        <h3 className="c-contact__card-title">
                            Địa chỉ
                        </h3>
                        <p className="c-contact__card-desc">
                            Khuê Trung, Cẩm Lệ, Đà Nẵng
                        </p>
                    </div>
                    <div className="c-contact__card">
                        <span className="c-contact__card-icon">
                            <FaRegUser />
                        </span>
                        <h3 className="c-contact__card-title">
                            Cử nhân
                        </h3>
                        <p className="c-contact__card-desc">
                            Luật Kinh Tế
                        </p>
                    </div>
                    <div className="c-contact__card">
                        <span className="c-contact__card-icon">
                            <FaRegEnvelope />
                        </span>
                        <h3 className="c-contact__card-title">
                            Email
                        </h3>
                        <p className="c-contact__card-desc">
                            ngocthanhtran1106@gmail.com
                        </p>
                    </div>
                    <div className="c-contact__card">
                        <span className="c-contact__card-icon">
                            <FaRegAddressBook/>
                        </span>
                        <h3 className="c-contact__card-title">
                            Số điện thoại
                        </h3>
                        <p className="c-contact__card-desc">
                            0853-098-234
                        </p>
                    </div>
                </div>
                <div className="c-contact__form">
                    <form action="" className="c-form">
                        <div className="c-form__grid">
                            <div className="c-form__row">
                                <label className="c-contact__form-tag">
                                    Tên của bạn <b>*</b>
                                </label>
                                <input type="text" className="c-form__input" />
                            </div>
                            <div className="c-form__row">
                                <label className="c-contact__form-tag">
                                    Địa chỉ email <b>*</b>
                                </label>
                                <input type="text" className="c-form__input" />
                            </div>
                            <div className="c-form__row c-form__row-area">
                                <label className="c-contact__form-tag">
                                    Nội dung <b>*</b>
                                </label>
                                <textarea className="c-form__input" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact