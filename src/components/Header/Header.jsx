import { useState } from "react";

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
        <section className="header-container desktop">
          <div className="header-container_item">
            <img src={logo} alt="dlm-agency" />
          </div>
          <div className="header-container_item nav-links">
            <a className="header-container_item-link" href="#about">
              О компании
            </a>
            <a className="header-container_item-link" href="#services">
              Услуги
            </a>
            <a className="header-container_item-link" href="#cases">
              Кейсы
            </a>
            <a className="header-container_item-link" href="#blog">
              Блог
            </a>
            <a className="header-container_item-link" href="#faq">
              Контакты
            </a>
          </div>
          <div className="header-container_item">
            <Button />
          </div>
        </section>

        {/* Мобильное меню */}
        <section className="header-container mobile">
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
        </section>
      </Container>

      {/* Выпадающее меню снизу */}
      <section className={`mobile-menu-bottom ${menuOpen ? "open" : ""}`}>
        <a className="mobile-menu_bottom_link" href="#about" onClick={setMenuOpen(false)}>
          О компании
        </a>
        <a className="mobile-menu_bottom_link" href="#services" onClick={setMenuOpen(false)}>
          Услуги
        </a>
        <a className="mobile-menu_bottom_link" href="#cases" onClick={setMenuOpen(false)}>
          Кейсы
        </a>
        <a className="mobile-menu_bottom_link" href="#blog" onClick={setMenuOpen(false)}>
          Блог
        </a>
        <a className="mobile-menu_bottom_link" href="#faq" onClick={setMenuOpen(false)}>
          Контакты
        </a>
        <Button />
      </section>
    </header>
  );
}
