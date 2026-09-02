import clsx from "clsx";
import { useEffect } from "react";
import Footer from "./components/Layout/footer";
import Header from "./components/Layout/header";
import About from "./components/Sections/about";
import Career from "./components/Sections/career";
import Contact from "./components/Sections/contact";
import Hero from "./components/Sections/hero";
import Projects from "./components/Sections/projects";
import Stacks from "./components/Sections/stacks";
import { useI18n } from "./i18n/useI18n";

// As faixas alternam preto/cinza na ordem em que aparecem aqui,
// entao inserir ou reordenar uma secao mantem o padrao sozinho.
// O cinza fica entre neutral-950 (14.5%) e neutral-900 (20.5%): mexa
// so na luminosidade abaixo para abrir ou fechar o contraste das faixas.
const BAND_BLACK = "bg-neutral-950";
const BAND_GRAY = "bg-[oklch(17%_0_0)]";

const sections = [
  { id: "hero", Component: Hero },
  { id: "about", Component: About },
  { id: "stacks", Component: Stacks },
  { id: "career", Component: Career },
  { id: "projects", Component: Projects },
  { id: "contact", Component: Contact },
];

const App = () => {
  const { t } = useI18n();

  useEffect(() => {
    document.title = t("header.pageTitle");
  }, [t]);

  return (
    <>
      <Header />
      <main className="flex flex-col items-center mt-[72px]!">
        {sections.map(({ id, Component }, index) => (
          <div
            key={id}
            className={clsx(
              "w-full flex justify-center",
              index % 2 === 0 ? BAND_BLACK : BAND_GRAY,
            )}
          >
            <Component />
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default App;
