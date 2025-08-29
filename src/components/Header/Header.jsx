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
            <Link className="header-container_item-link">О компании</Link>
            <Link className="header-container_item-link">Услуги</Link>
            <Link className="header-container_item-link">Кейсы</Link>
            <Link className="header-container_item-link">Блог</Link>
            <Link className="header-container_item-link">Контакты</Link>
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
        <Link className="mobile-menu_bottom_link">О компании</Link>
        <Link className="mobile-menu_bottom_link">Услуги</Link>
        <Link className="mobile-menu_bottom_link">Кейсы</Link>
        <Link className="mobile-menu_bottom_link">Блог</Link>
        <Link className="mobile-menu_bottom_link">Контакты</Link>
        <Button />
      </div>
    </header>
  );
}
