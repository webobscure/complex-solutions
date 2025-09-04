import "./ContainerHeader.css";

export default function ContainerHeader({ 
    className = "", 
    name, 
    title, 
    description 
}) {
	return (
		<section className={`container-header ${className}`}>
			<p className="container-header__name">{name}</p>

			<h1 className="container-header__title">{title}</h1>

			<p className="container-header__description">{description}</p>
		</section>
	);
}
