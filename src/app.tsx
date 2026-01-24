import Header from "./components/Layout/header";
import About from "./components/Sections/about";
import Career from "./components/Sections/career";
import Contact from "./components/Sections/contact";
import Projects from "./components/Sections/projects";
import Stacks from "./components/Sections/stacks";

const App = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center !mt-16">
        <About />
        <Stacks />
        <Career />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
