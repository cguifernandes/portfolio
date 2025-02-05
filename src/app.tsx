import Header from "./components/Layout/header";
import About from "./components/Sections/about";
import Projects from "./components/Sections/projects";
import Stacks from "./components/Sections/stacks";

const App = () => {
	return (
		<>
			<Header />
			<main className="flex flex-col items-center !mt-16">
				<About />
				<Stacks />
				<Projects />
			</main>
		</>
	);
};

export default App;
