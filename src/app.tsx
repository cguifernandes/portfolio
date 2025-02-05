import Header from "./components/Layout/header";
import About from "./components/Sections/about";
import Stacks from "./components/Sections/stacks";

const App = () => {
	return (
		<>
			<Header />
			<main className="flex flex-col items-center !mt-16">
				<About />
				<Stacks />
			</main>
		</>
	);
};

export default App;
