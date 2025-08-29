import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-container">
            <div className="header-container_item">
                Logo
            </div>
            <div className="header-container_item">
                <Link className="header-container_item-link">О компании</Link>
                <Link className="header-container_item-link">Услуги</Link>
                <Link className="header-container_item-link">Кейсы</Link>
                <Link className="header-container_item-link">Блог</Link>
                <Link className="header-container_item-link">Контакты</Link>

            </div>
            <div className="header-container_item">
                <button className="action-button">
                    Обсудить проект
                </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
