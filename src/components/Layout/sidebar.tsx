import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useActiveSection } from "../../hooks/use-active-section";
import { useI18n } from "../../i18n/useI18n";
import LanguageSwitcher from "../language-switcher";
import { GithubIcon } from "../ui/github";
import { LinkedinIcon } from "../ui/linkedin";
import { MailCheckIcon } from "../ui/mail-check";
import { PhoneIcon } from "../ui/phone";
import { NAV_IDS, NAV_ITEMS } from "./nav-items";

const SideBar = () => {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const active = useActiveSection(NAV_IDS);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        type="button"
        className="md:hidden hover:bg-neutral-800 p-2 cursor-pointer  rounded-lg flex duration-300 ease-in-out"
        onClick={toggleSidebar}
      >
        <Menu size={20} color="#fff" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-0 right-0 max-w-7xl w-full gap-y-8 inset-x-4 top-16 rounded-2xl border border-neutral-800 z-20 pb-6 p-4 justify-between bg-neutral-900/60 backdrop-blur-md flex flex-col md:hidden"
          >
            <nav className="flex-1 flex flex-col h-full">
              <ul className="flex h-full flex-1 items-center flex-col gap-8">
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
                      onClick={toggleSidebar}
                    >
                      {t(labelKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <ul className="flex items-center justify-center gap-x-6">
              <li>
                <a
                  href="mailto:gui.adfer@gmail.com"
                  className="rounded-lg cursor-pointer flex duration-300 ease-in-out group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MailCheckIcon
                    size={20}
                    className="text-white duration-300 ease-in-out group group-hover:text-primary-500"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/5511912345678"
                  className="rounded-lg cursor-pointer flex duration-300 ease-in-out group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PhoneIcon
                    size={20}
                    className="text-white duration-300 ease-in-out group group-hover:text-primary-500"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/guilherme-fernandes-6b1353243/"
                  className="rounded-lg cursor-pointer flex duration-300 ease-in-out group"
                >
                  <LinkedinIcon
                    size={20}
                    className="text-white duration-300 ease-in-out group group-hover:text-primary-500"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/cguifernandes"
                  className="rounded-lg cursor-pointer flex duration-300 ease-in-out group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon
                    size={20}
                    className="text-white duration-300 ease-in-out group group-hover:text-primary-500"
                  />
                </a>
              </li>
            </ul>

            <div className="flex justify-center">
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBar;
