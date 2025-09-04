import "./About.css";

import Container from "../elements/Container/Container";
import ContainerHeader from "../elements/ContainerHeader/ContainerHeader";
import Card from "../elements/Card/Card";

export default function About() {
	return (
		<div id="about" className="waves">
			<Container >
			<ContainerHeader
				className="about-container"
				
				name="О компании"
				title={
					<>
						Надёжный партнёр
						<br />в области IT-безопасности
					</>
				}
				description="Мы специализируемся на комплексных IT-решениях для российского бизнеса, обеспечивая полное соответствие требованиям российского законодательства."
			/>
			<section className="about__card-container">
				<Card
					theme="dark"
					title="Соответствие российскому законодательству"
					description="Все решения соответствуют требованиям 152-ФЗ, ФСТЭК и ФСБ"
					
				/>
				
				<Card
					theme="dark"
					title="Отечественные решения"
					description="Используем российские технологии и при необходимости замещаем иностранные аналоги"
				/>
				
				<Card
					theme="dark"
					title="Экспертная поддержка"
					description="Используем российские технологии и при необходимости замещаем иностранные аналоги"
				/>
			</section>
		</Container>
		</div>
	);
}
