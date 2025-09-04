import React, { useState } from "react";
import "./Form.css";
import ContainerHeader from "../elements/ContainerHeader/ContainerHeader";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
    setIsSubmitted(true);

    // Сброс формы через 3 секунды
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        agree: false,
      });
    }, 3000);
  };

  // Маска для телефона
  const formatPhone = (value) => {
    if (!value) return value;

    const phoneNumber = value.replace(/[^\d]/g, "");
    if (phoneNumber.length < 2) return phoneNumber;
    if (phoneNumber.length < 5) return `+7 (${phoneNumber.slice(1, 4)}`;
    if (phoneNumber.length < 8)
      return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}`;
    if (phoneNumber.length < 10)
      return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(
        4,
        7
      )}-${phoneNumber.slice(7, 9)}`;
    return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(
      4,
      7
    )}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
  };

  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhone(e.target.value);
    setFormData((prevState) => ({
      ...prevState,
      phone: formattedPhone,
    }));
  };

  return (

    <div className="feedback-container waves" id="action">
        <ContainerHeader
					name="Форма обратной связи"
					title="Свяжитесь с нами"
					description="Готовы обсудить ваш проект? Оставьте заявку, и наши эксперты свяжутся с вами в течение часа"
				/>
      <div className="feedback-form">
        {isSubmitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Спасибо за вашу заявку!</h2>
            <p>Мы свяжемся с вами в течение часа</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Ваше Имя"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Название компании"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                required
                placeholder="+7 (999) 123-45-67"
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Оставить сообщение..."
                rows="4"
              />
            </div>

           

            <button type="submit" className="submit-btn">
              Отправить заявку
            </button>
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
              />
              <label htmlFor="agree">
                Даю свое согласие на обработку персональных данных
              </label>
            </div>
          </form>
          
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
