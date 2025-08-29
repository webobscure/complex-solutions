import automate from "../../assets/automate.svg";
import complex from "../../assets/complex.png";
import computer from "../../assets/computer.svg";
import safe from "../../assets/safe.svg";
import vpn from "../../assets/vpn.svg";

import Button from "../elements/Button/Button";

export default function Hero() {
  return (
    <section className="container">
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
        <div className="card">
          <img src={computer} alt="computer" />
          <h2>Разработка корпоративных систем</h2>
        </div>
        <div className="card">
          <img src={safe} alt="safe" />
          <h2>Информационная безопасность</h2>
        </div>
        <div className="card">
          <img src={vpn} alt="vpn" />
          <h2>VPN и удалённый доступ</h2>
        </div>
        <div className="card">
          <img src={automate} alt="automate" />
          <h2>Автоматизация и интеграции</h2>
        </div>
      </div>
    </section>
  );
}
