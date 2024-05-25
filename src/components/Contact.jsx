import axios from 'axios';
import React, { useState } from 'react';
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from "react-icons/fa";

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Lấy thời gian hiện tại và định dạng
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0'); // Ngày (DD)
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Tháng (MM)
        const year = currentDate.getFullYear(); // Năm (YYYY)
        const formattedDate = `${day}-${month}-${year}`; // Định dạng DD-MM-YYYY
        const formattedTime = currentDate.toTimeString().slice(0, 8); // HH:mm:ss
        const dateTime = `${formattedDate} ${formattedTime}`;
        
        // Tạo đối tượng dữ liệu gửi đi với thuộc tính tiếng Việt
        const dataToSend = {
            'Họ và tên': form.name,
            'Địa chỉ email': form.email,
            'Chủ đề': form.subject,
            'Nội dung': form.message,
            'Thời gian gửi': dateTime
        };

        console.log('Submitting form with dateTime:', dataToSend); // Log dữ liệu trước khi gửi

        axios.post(
            'https://sheet.best/api/sheets/3a00bb3c-2a07-4577-a152-8a40a446800e',
            dataToSend
        ).then((response) => {
            console.log('Response:', response);
            setForm({ name: '', email: '', subject: '', message: '' });
        }).catch((error) => {
            console.error('Error submitting form:', error); // Log lỗi nếu có
        });
    }

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
                                <FaRegAddressBook />
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
                        <form className="c-form" onSubmit={handleSubmit}>
                            <div className="c-form__grid">
                                <div className="c-form__row">
                                    <label className="c-contact__form-tag">
                                        Tên của bạn <b>*</b>
                                    </label>
                                    <input 
                                        type="text" 
                                        name='name' 
                                        onChange={handleChange}
                                        value={form.name} 
                                        className="c-form__input" />
                                </div>
                                <div className="c-form__row">
                                    <label className="c-contact__form-tag">
                                        Địa chỉ email <b>*</b>
                                    </label>
                                    <input 
                                        type="email" 
                                        name='email' 
                                        onChange={handleChange}
                                        value={form.email} 
                                        className="c-form__input" />
                                </div>
                            </div>
                            <div className="c-form__row">
                                <label className="c-contact__form-tag">
                                    Tiêu đề <b>*</b>
                                </label>
                                <input 
                                    type="text" 
                                    name='subject' 
                                    onChange={handleChange}
                                    value={form.subject} 
                                    className="c-form__input" />
                            </div>
                            <div className="c-form__row c-form__row-area">
                                <label className="c-contact__form-tag">
                                    Nội dung <b>*</b>
                                </label>
                                <textarea 
                                    name='message' 
                                    onChange={handleChange}
                                    value={form.message} 
                                    className="c-form__input" />
                            </div>
                            <div className="c-contact__submit">
                                <button className="c-submit">
                                    GỬI CHO TÔI
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
