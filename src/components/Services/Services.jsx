import "./Services.css";

import automatisation from "../../assets/services/automatisation.svg";
import code from "../../assets/services/code.svg";
import consulting from "../../assets/services/consulting.svg";
import frontend from "../../assets/services/frontend.svg";
import hosting from "../../assets/services/hosting.svg";
import messenger from "../../assets/services/messenger.svg";
import security from "../../assets/services/security.svg";
import tg from "../../assets/services/tg.svg";
import vpn from "../../assets/services/vpn.svg";

import Container from "../elements/Container/Container";
import ContainerHeader from "../elements/ContainerHeader/ContainerHeader";
import Card from "../elements/Card/Card";

export default function Services() {
  return (
    <section id="services">
      <Container>
        <ContainerHeader
          className="services-container"
          name="Услуги"
          title="Комплексные IT-решения"
          description="Предоставляем полный спектр услуг в области информационных технологий с соблюдением всех требований российского законодательства"
        />
        <section className="services__card-container">
          <Card
            imgSrc={code}
            theme="light"
            title="Разработка ПО"
            description="Корпоративные системы, CRM, ERP"
          />

          <Card
            imgSrc={security}
            theme="light"
            title="Информационная безопасность"
            description="Аудит, защита данных, SOC, соответствие 152-ФЗ"
          />

          <Card
            imgSrc={consulting}
            theme="light"
            title="IT-консалтинг"
            description="Внедрение, оптимизация инфраструктуры"
          />

          <Card
            imgSrc={automatisation}
            theme="light"
            title="Автоматизация бизнес-процессов"
            description="Автоматизация бизнес-процессов"
          />

          <Card
            imgSrc={messenger}
            theme="light"
            title="Корпоративный мессенджер"
            description="На базе защищённых серверов в РФ"
          />

          <Card
            imgSrc={tg}
            theme="light"
            title="Telegram-боты и чат-автоматизация"
            description="Telegram-боты и чат-автоматизация"
          />

          <Card
            imgSrc={hosting}
            theme="light"
            title="Настройка и администрирование серверов"
            description="Настройка и администрирование серверов"
          />

          <Card
            imgSrc={frontend}
            theme="light"
            title="Frontend-разработка"
            description="Frontend-разработка"
          />

          <Card
            imgSrc={vpn}
            theme="light"
            title="VPN-решения"
            description="Корпоративные VPN-сети для безопасного удалённого доступа"
          >
            <div className="services_tags">
              <p className="services_tag">Корпоративные VPN-сети </p>
              <p className="services_tag">Защищённый удалённый доступ</p>
              <p className="services_tag">Обеспечение конфиденциальности </p>
              <p className="services_tag">Защита коммерческих данных</p>
              <p className="services_tag">
                Соответствие требованиям ФСТЭК и ФСБ{" "}
              </p>
            </div>
          </Card>
        </section>
      </Container>
    </section>
  );
}
