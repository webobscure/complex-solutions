import "./Blog.css";

import Container from "../elements/Container/Container";
import ContainerHeader from "../elements/ContainerHeader/ContainerHeader";
import SliderTwo from "../Slider/SliderTwo";

export default function Blog() {
	return (
		<div id="blog">
			<Container>
				<ContainerHeader
					name="Блог"
					title="Полезные статьи"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam"
				/>

				<SliderTwo />
			</Container>
		</div>
	);
}
