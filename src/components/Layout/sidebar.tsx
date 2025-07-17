import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useSpring, animated, easings } from "@react-spring/web";
import { Icon } from "@iconify/react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const animation = useSpring({
    transform: isOpen ? "translateX(0px)" : "translateX(256px)",
    config: { easing: easings.easeOutCubic, duration: 600 },
  });

  return (
    <>
      <button
        type="button"
        className="md:hidden hover:bg-neutral-800 p-2 cursor-pointer rounded-lg flex duration-300 ease-in-out"
        onClick={toggleSidebar}
      >
        <Menu size={20} color="#fff" />
      </button>

      <animated.div
        style={animation}
        className="fixed top-0 right-0 w-64 pb-6 p-4 justify-between bg-neutral-900/60 flex flex-col backdrop-blur-md min-h-screen border-l-2 border-t-2 border-neutral-800 z-20"
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="hover:bg-neutral-800 p-2 cursor-pointer rounded-lg flex duration-300 ease-in-out"
            onClick={toggleSidebar}
          >
            <X size={20} color="#fff" />
          </button>
        </div>
        <nav className="flex-1 flex flex-col h-full">
          <ul className="flex h-full flex-1 items-center py-20 flex-col justify-between">
            <li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
              <a
                href="#about"
                className="text-white px-3 py-1.5 duration-300 ease-in-out"
                onClick={toggleSidebar}
              >
                Sobre mim
              </a>
            </li>
            <li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
              <a
                href="#stacks"
                className="text-white px-3 py-1.5 duration-300 ease-in-out"
                onClick={toggleSidebar}
              >
                Stacks
              </a>
            </li>
            <li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
              <a
                href="#projects"
                className="text-white px-3 py-1.5 duration-300 ease-in-out"
                onClick={toggleSidebar}
              >
                Projetos
              </a>
            </li>
            <li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
              <a
                href="#contact"
                className="text-white px-3 py-1.5 duration-300 ease-in-out"
                onClick={toggleSidebar}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <ul className="flex justify-center items-center gap-x-6">
          <li>
            <a
              href="mailto:gui.adfer@gmail.com"
              className="rounded-lg cursor-pointer flex duration-300 ease-in-out group"
            >
              <Icon
                className="text-white duration-300 ease-in-out group group-hover:text-primary-500"
                fontSize={24}
                icon="mdi:gmail"
              />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/_.guiii/"
              className="rounded-lg cursor-pointer flex duration-300 ease-in-out group"
            >
              <Icon
                className="text-white duration-300 ease-in-out group group-hover:text-primary-500"
                fontSize={24}
                icon="mdi:instagram"
              />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/guilherme-fernandes-6b1353243/"
              className="rounded-lg cursor-pointer flex duration-300 ease-in-out group"
            >
              <Icon
                className="text-white duration-300 ease-in-out group group-hover:text-primary-500"
                fontSize={24}
                icon="mdi:linkedin"
              />
            </a>
          </li>

          <li>
            <a
              href="#"
              className="rounded-lg cursor-pointer flex duration-300 ease-in-out group"
            >
              <Icon
                className="text-white duration-300 ease-in-out group group-hover:text-primary-500"
                fontSize={24}
                icon="mdi:github"
              />
            </a>
          </li>
        </ul>
      </animated.div>
    </>
  );
};

export default SideBar;
