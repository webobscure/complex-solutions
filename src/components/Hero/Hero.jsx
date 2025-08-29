import "./Hero.css";

import automate from "../../assets/automate.svg";
import complex from "../../assets/complex.png";
import computer from "../../assets/computer.svg";
import safe from "../../assets/safe.svg";
import vpn from "../../assets/vpn.svg";
import Button from "../elements/Button/Button";
import Card_hero from "./Card_hero";
import Container from "../elements/Container/Container";
import Slider from "../Slider/Slider";
import SliderTwo from "../Slider/SliderTwo";

export default function Hero() {
  return (
    <Container>
      <div className="complex-solutions-block">
        <div className="complex-solutions-block__left">
          <h1 className="complex-solutions-block__left-title">
            Комплексные IT-решения
            <br /> для бизнеса в России
          </h1>
          <p className="complex-solutions-block__left-descr">
            Разработка ПО, кибербезопасность, VPN, автоматизация
            бизнес-процессов
          </p>
          <Button />
        </div>
        <div className="complex-solutions-block__right">
          <img src={complex} />
        </div>
      </div>
      <div className="cards">
        <Card_hero
          imgSrc={computer}
          imgAlt="computer"
          title="Разработка корпоративных систем"
        />
        <Card_hero
          imgSrc={safe}
          imgAlt="safe"
          title="Информационная безопасность"
        />
        <Card_hero imgSrc={vpn} imgAlt="vpn" title="VPN и удалённый доступ" />
        <Card_hero
          imgSrc={automate}
          imgAlt="automate"
          title="Автоматизация и интеграции"
        />
      </div>
      <div className="success-projects" id="cases">
        <div className="success-projects-container">
          <button className="action-button">Кейсы</button>
          <h1 className="success-projects-container__title">
            Успешные проекты наших клиентов
          </h1>
          <p className="success-projects-container__descr">
            Реальные примеры внедрения IT-решений, которые помогли компаниям<br/>
            повысить безопасность и эффективность работы
          </p>
        </div>
        <Slider />
      </div>
      <div className="success-projects no-bg" id="blog">
        <div className="success-projects-container">
          <button className="action-button">Блог</button>
          <h1 className="success-projects-container__title">Полезные статьи</h1>
          <p className="success-projects-container__descr">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud<br/> exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <SliderTwo />
      </div>
    </Container>
  );
}
