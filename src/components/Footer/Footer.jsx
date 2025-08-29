import "./Footer.css";

import Container from "../elements/Container/Container";

export default function Footer() {
	return (
		<footer className="footer-container ">
			<Container>
				<div className="footer-block">
					<div className="footer-block__left">
						<h2>Юридический адрес</h2>

						<p>
							606060, г. Москва, ул.
							<br /> Орджоникидзе, д. 38
						</p>
					</div>

					<div className="footer-block__right">
						<div className="footer-block__right-item">
							<h2>Контактный телефон</h2>

							<p>+8 (800) 299-8139</p>
						</div>

						<div className="footer-block__right-item">
							<h2>Email</h2>

							<p>example@company.ru</p>
						</div>
					</div>
				</div>

				<p className="footer-policy">Политика обработки персональных данных</p>
			</Container>
		</footer>
	);
}
