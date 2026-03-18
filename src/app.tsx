import { useEffect } from "react";
import Header from "./components/Layout/header";
import About from "./components/Sections/about";
import Career from "./components/Sections/career";
import Contact from "./components/Sections/contact";
import Projects from "./components/Sections/projects";
import Stacks from "./components/Sections/stacks";
import { useI18n } from "./i18n/useI18n";

const App = () => {
  const { t } = useI18n();

  useEffect(() => {
    document.title = t("header.pageTitle");
  }, [t]);

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
