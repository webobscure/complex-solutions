import Container from "../elements/Container/Container";
import ContainerHeader from "../elements/ContainerHeader/ContainerHeader";
import Slider from "../Slider/Slider";
import "./Cases.css";

export default function Cases() {
	return (
		<div className="success-projects" id="cases">
			<Container>
				<ContainerHeader
					name="Кейсы"
					title="Успешные проекты наших клиентов"
					description="Реальные примеры внедрения IT-решений, которые помогли компаниям повысить безопасность и эффективность работы"
				/>

				<Slider />
			</Container>
		</div>
	);
}
