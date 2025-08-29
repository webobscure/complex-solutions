import { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/dlm-logo.svg";
import Button from "../elements/Button/Button";
import Container from "../elements/Container/Container";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Container>
        {/* Десктопное меню */}
        <div className="header-container desktop">
          <div className="header-container_item">
            <img src={logo} alt="dlm-agency" />
          </div>
          <div className="header-container_item nav-links">
            <a className="header-container_item-link">О компании</a>
            <a className="header-container_item-link" >Услуги</a>
            <a className="header-container_item-link" href="#cases">Кейсы</a>
            <a className="header-container_item-link" href="#blog">Блог</a>
            <a className="header-container_item-link">Контакты</a>
          </div>
          <div className="header-container_item">
            <Button />
          </div>
        </div>

        {/* Мобильное меню */}
        <div className="header-container mobile">
          <div className="header-container_item">
            <img src={logo} alt="dlm-agency" />
          </div>
          <div
            className={`burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </Container>

      {/* Выпадающее меню снизу */}
      <div className={`mobile-menu-bottom ${menuOpen ? "open" : ""}`}>
        <a className="mobile-menu_bottom_link">О компании</a>
        <a className="mobile-menu_bottom_link">Услуги</a>
        <a className="mobile-menu_bottom_link" href="#cases">Кейсы</a>
        <a className="mobile-menu_bottom_link" href="#blog">Блог</a>
        <a className="mobile-menu_bottom_link">Контакты</a>
        <Button />
      </div>
    </header>
  );
}
