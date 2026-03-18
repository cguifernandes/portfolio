import Logo from "../../assets/reduceLogo.svg";
import { useI18n } from "../../i18n/useI18n";
import LanguageSwitcher from "../language-switcher";
import SideBar from "./sidebar";

const Header = () => {
  const { t } = useI18n();

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 max-w-7xl z-100 w-full flex px-10 justify-center">
      <header className="h-14 w-full flex justify-between items-center py-3 px-6 rounded-full border border-neutral-800 bg-neutral-900 md:bg-neutral-900/60 backdrop-blur-md">
        <img src={Logo} alt="Logo" className="w-10 h-fit" />
        <SideBar />
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center text-sm gap-2">
            <li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
              <a
                href="#about"
                className="text-white px-3 py-1.5 duration-300 ease-in-out"
              >
                {t("header.nav.about")}
              </a>
            </li>
            <li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
              <a
                href="#stacks"
                className="text-white px-3 py-1.5 duration-300 ease-in-out"
              >
                {t("header.nav.stacks")}
              </a>
            </li>
            <li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
              <a
                href="#career"
                className="text-white px-3 py-1.5 duration-300 ease-in-out"
              >
                {t("header.nav.career")}
              </a>
            </li>
            <li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
              <a
                href="#projects"
                className="text-white px-3 py-1.5 duration-300 ease-in-out"
              >
                {t("header.nav.projects")}
              </a>
            </li>
            <li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
              <a
                href="#contact"
                className="text-white px-3 py-1.5 duration-300 ease-in-out"
              >
                {t("header.nav.contact")}
              </a>
            </li>
          </ul>
        </nav>
        <LanguageSwitcher className="hidden md:flex" />
      </header>
    </div>
  );
};

export default Header;
