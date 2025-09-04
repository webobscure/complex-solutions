import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Cases from "./components/Cases/Cases";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import FeedbackForm from "./components/Form/Form";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<About />
			{/* services */}
			<Cases />
			<Blog />
			{/* faq */}
			<FeedbackForm />
			<Footer />
		</>
	);
}

export default App;
