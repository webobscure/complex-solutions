import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Cases from "./components/Cases/Cases";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<About />
			{/* about */}
			{/* services */}
			<Cases />
			<Blog />
			{/* faq */}
			{/* form */}
			<Footer />
		</>
	);
}

export default App;
