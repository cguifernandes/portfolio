import clsx from "clsx";
import Logo from "../../assets/reduceLogo.svg";
import { useActiveSection } from "../../hooks/use-active-section";
import { useI18n } from "../../i18n/useI18n";
import LanguageSwitcher from "../language-switcher";
import { NAV_IDS, NAV_ITEMS } from "./nav-items";
import SideBar from "./sidebar";

const Header = () => {
  const { t } = useI18n();
  const active = useActiveSection(NAV_IDS);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 max-w-7xl z-100 w-full flex px-10 justify-center">
      <header className="h-14 w-full flex justify-between items-center py-3 px-6 rounded-full border border-neutral-800 bg-neutral-900 md:bg-neutral-900/60 backdrop-blur-md">
        <img src={Logo} alt="Logo" className="w-10 h-fit" />
        <SideBar />
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center text-sm gap-2">
            {NAV_ITEMS.map(({ id, labelKey }) => (
              <li
                key={id}
                className={clsx(
                  "hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out",
                  active === id && "bg-neutral-800",
                )}
              >
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className="text-white px-3 py-1.5 duration-300 ease-in-out"
                >
                  {t(labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSwitcher className="hidden md:flex" />
      </header>
    </div>
  );
};

export default Header;
