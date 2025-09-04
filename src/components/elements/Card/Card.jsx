import "./Card.css";
import logo from "../../../assets/about-card-logo.svg";

export default function Card({
	className = "",
	imgSrc = logo,
	title,
	description,
	theme = "light",
	children,
}) {
	return (
		<section className={`card-container ${className} card-theme-${theme}`}>
			<img src={imgSrc} alt="logo" className={`card-theme-${theme}_image`} />
			<p className={`card-theme-${theme}_title`}>{title}</p>
			<p className={`card-theme-${theme}_description`}>{description}</p>
			{children}
		</section>
	);
}
