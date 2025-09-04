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
			<section className="hero-wrapper" id="about">
				<div className="hero-block">
					<div className="hero-block__left">
						<h1 className="hero-block__left-title">
							Комплексные IT-решения
							<br /> для бизнеса в России
						</h1>

						<p className="hero-block__left-descr">
							Разработка ПО, кибербезопасность, VPN, автоматизация
							бизнес-процессов
						</p>

						<Button />
					</div>

					<div className="hero-block__right">
						<img src={complex} />
					</div>
				</div>

				<section className="hero-cards">
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
				</section>
			</section>
		</Container>
	);
}
