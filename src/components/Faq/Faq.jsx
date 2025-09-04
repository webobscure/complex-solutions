import "./Faq.css";
import Container from "../elements/Container/Container";
import ContainerHeader from "../elements/ContainerHeader/ContainerHeader";
import { useState } from "react";

export default function Faq() {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAccordion = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const faqItems = [
		{
			question: "Настройка и администрирование серверов",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			question: "Как обеспечивается соответствие закону 152-ФЗ?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			question: "Чем ваш VPN отличается от зарубежных сервисов?",
			answer:
				"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			question: "Можно ли подключить удалённых сотрудников из-за границы?",
			answer:
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
		},
	];

	return (
		<section className="faq-wrapper">
			<Container>
				<ContainerHeader
					className="faq-container"
					name="FAQ"
					title="Часто задаваемые вопросы"
					description="Ответы на популярные вопросы о наших услугах и решениях"
				/>

				<div className="faq-accordion">
					{faqItems.map((item, index) => (
						<div key={index} className="faq-item">
							<button
								className="faq-question"
								onClick={() => toggleAccordion(index)}
								aria-expanded={activeIndex === index}
							>
								<span className="faq-question-text">{item.question}</span>
								<span className="faq-icon">
									{activeIndex === index ? "−" : "+"}
								</span>
							</button>

							<div
								className={`faq-answer ${
									activeIndex === index ? "faq-answer--active" : ""
								}`}
							>
								<p>{item.answer}</p>
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}
