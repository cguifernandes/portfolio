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
    <div className="fixed inset-x-0 top-4 z-100 flex w-full justify-center px-6 md:px-10">
      <header className="flex h-14 w-full max-w-7xl items-center justify-between gap-x-4 rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 md:bg-neutral-900/60 backdrop-blur-md">
        <a
          href="#hero"
          aria-label="cguifernandes"
          className="group flex shrink-0 items-center gap-x-2.5"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-neutral-950 duration-300 ease-in-out border-primary-500/50">
            <img src={Logo} alt="" className="h-4 w-auto" />
          </span>
          <span className="hidden font-semibold text-sm tracking-tight duration-300 ease-in-out text-primary-400 lg:inline">
            cguifernandes
          </span>
        </a>

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
                  className="whitespace-nowrap text-white px-3 py-1.5 duration-300 ease-in-out"
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
