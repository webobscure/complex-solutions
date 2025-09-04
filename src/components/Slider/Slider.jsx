import React, { useState, useEffect, useRef } from "react";
import vpnpng from "../../assets/vpn.png";
import docs from "../../assets/docs.png";
import auto from "../../assets/auto.png";
import arrow from "../../assets/arrow.png";
import "./Slider.css";

const data = [
	{
		img: vpnpng,
		title: "Внедрение корпоративного VPN для международной компании",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		img: docs,
		title: "Автоматизация документооборота крупного холдинга",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		img: auto,
		title: "Автоматизация процессов в автопроме",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

export default function Slider() {
	const [index, setIndex] = useState(0);
	const [visible, setVisible] = useState(2.2);
	const trackRef = useRef(null);
	const pos = useRef({ startX: 0, scrollLeft: 0, isDown: false });
	const activeIndicator =
		index >= data.length - visible ? data.length - 1 : index;
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 600) setVisible(1);
			else if (window.innerWidth < 992) setVisible(1.5);
			else setVisible(2.2);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const next = () => {
		if (index < data.length - visible) setIndex((prev) => prev + 1);
	};
	const prev = () => {
		if (index > 0) setIndex((prev) => prev - 1);
	};

	const itemWidth =
		trackRef.current?.querySelector(".slider-item")?.offsetWidth || 0;
	const gap = 12; // или вычислить динамически

	const maxIndex = Math.max(0, data.length - Math.floor(visible));
	if (index > maxIndex) setIndex(maxIndex);

	// drag
	const onMouseDown = (e) => {
		pos.current = {
			isDown: true,
			startX: e.pageX - trackRef.current.offsetLeft,
			scrollLeft: trackRef.current.scrollLeft,
		};
	};
	const onMouseMove = (e) => {
		if (!pos.current.isDown) return;
		e.preventDefault();
		const x = e.pageX - trackRef.current.offsetLeft;
		const walk = x - pos.current.startX;
		trackRef.current.scrollLeft = pos.current.scrollLeft - walk;
	};
	const onMouseUp = () => {
		pos.current.isDown = false;
	};

	return (
		<div className="slider-wrapper">
			<div
				className="slider"
				ref={trackRef}
				onMouseDown={onMouseDown}
				onMouseMove={onMouseMove}
				onMouseLeave={onMouseUp}
				onMouseUp={onMouseUp}
			>
				<div
					className="slider-track"
					style={{ transform: `translateX(-${index * (itemWidth + gap)}px)` }}
				>
					{data.map((item, i) => (
						<div key={i} className="slider-item">
							<img src={item.img} alt="" />
							<div className="slider-container">
								<div className="slider-icon">Название компании</div>
								<h2>{item.title}</h2>
								<p>{item.desc}</p>
								{/* <button className="slider-action">
									<img src={arrow} alt="→" />
								</button> */}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* нижняя панель */}
			<div className="slider-footer">
				{/* прогресс-бар */}
				<div className="slider-progress">
					{data.map((_, i) => (
						<div
							key={i}
							className={`progress-segment ${
								i === activeIndicator ? "active" : ""
							}`}
						/>
					))}
				</div>

				{/* стрелки */}
				<div className="slider-controls">
					<button className="footer-btn" onClick={prev} disabled={index === 0}>
					</button>
					<button
						className="footer-btn"
						onClick={next}
						disabled={index >= data.length - visible}
					>
					</button>
				</div>
			</div>
		</div>
	);
}
