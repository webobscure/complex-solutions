import complex from "./../assets/complex.png";
import computer from "./../assets/computer.png";
import safe from "./../assets/safe.png";
import network from "./../assets/network.png";
import automate from "./../assets/automate.png";

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
          <button className="action-button">Обсудить проект</button>
        </div>
        <div className="complex-solutions-block__right">
          <img src={complex} />
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <img src={computer} alt="" />
          <h2>Разработка корпоративных систем</h2>
        </div>
        <div className="card">
          <img src={safe} alt="" />
          <h2>Информационная безопасность</h2>
        </div>
        <div className="card">
          <img src={network} alt="" />
          <h2>VPN и удалённый доступ</h2>
        </div>
        <div className="card">
          <img src={automate} alt="" />
          <h2>Автоматизация и интеграции</h2>
        </div>
      </div>
    </section>
  );
}
