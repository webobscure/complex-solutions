import "./Card_hero.css";

export default function Card_hero({imgSrc, imgAlt, title}) {
  return (
    <div className="card">
      <img src={imgSrc} alt={imgAlt} />
      <h2>{title}</h2>
    </div>
  );
}
