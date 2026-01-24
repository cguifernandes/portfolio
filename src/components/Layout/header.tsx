import Logo from "../../assets/reduceLogo.svg";
import SideBar from "./sidebar";

const Header = () => {
  return (
    <header className="flex justify-center h-16 py-3 z-[100] px-6 border-b-2 border-neutral-800 bg-neutral-900 md:bg-neutral-900/60 md:backdrop-blur-md fixed top-0 left-0 w-full">
      <div className="flex justify-between w-full max-w-7xl items-center">
        <img src={Logo} alt="Logo" className="w-12 h-fit" />
        <SideBar />
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-2">
            <li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
              <a
                href="#about"
                className="text-white px-3 py-1.5 text-sm duration-300 ease-in-out"
              >
                Sobre mim
              </a>
            </li>
            <li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
              <a
                href="#stacks"
                className="text-white px-3 py-1.5 text-sm duration-300 ease-in-out"
              >
                Stacks
              </a>
            </li>
            <li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
              <a
                href="#career"
                className="text-white px-3 py-1.5 text-sm duration-300 ease-in-out"
              >
                Carreira
              </a>
            </li>
            <li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
              <a
                href="#projects"
                className="text-white px-3 py-1.5 text-sm duration-300 ease-in-out"
              >
                Projetos
              </a>
            </li>
            <li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
              <a
                href="#contact"
                className="text-white px-3 py-1.5 text-sm duration-300 ease-in-out"
              >
                Contato
              </a>
            </li>
            {/* <li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
							<button type="button" className="p-2 cursor-pointer">
								<Sun
									className="text-white duration-300 ease-in-out"
									size={16}
								/>
							</button>
						</li>
						<li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
							<button type="button" className="p-2 cursor-pointer">
								<Languages
									className="text-white duration-300 ease-in-out"
									size={16}
								/>
							</button>
						</li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
