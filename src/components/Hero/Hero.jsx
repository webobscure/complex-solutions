import "./Hero.css";

import automate from "../../assets/automate.svg";
import complex from "../../assets/complex.png";
import computer from "../../assets/computer.svg";
import safe from "../../assets/safe.svg";
import vpn from "../../assets/vpn.svg";

import Button from "../elements/Button/Button";
import Card_hero from "./Card_hero";
import Container from "../elements/Container/Container";

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
        <Card_hero
          imgSrc={vpn}
          imgAlt="vpn"
          title="VPN и удалённый доступ"
        />
        <Card_hero
          imgSrc={automate}
          imgAlt="automate"
          title="Автоматизация и интеграции"
        />
      </div>
    </Container>
  );
}