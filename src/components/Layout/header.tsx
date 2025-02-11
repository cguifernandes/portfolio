import { Languages, Sun } from "lucide-react";
import Logo from "../../assets/reduceLogo.svg";

const Header = () => {
	return (
		<header className="flex justify-center h-16 py-3 z-50 px-6 border-b border-neutral-800 bg-neutral-900/60 backdrop-blur-md fixed top-0 left-0 w-full">
			<div className="flex justify-between w-full max-w-7xl items-center">
				<img src={Logo} alt="Logo" className="w-12 h-fit" />
				<nav className="flex items-center">
					<ul className="flex items-center gap-2">
						<li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
							<a
								href="#"
								className="text-white px-3 py-1.5 text-sm duration-300 ease-in-out"
							>
								Sobre mim
							</a>
						</li>
						<li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
							<a
								href="#"
								className="text-white px-3 py-1.5 text-sm duration-300 ease-in-out"
							>
								Stacks
							</a>
						</li>
						<li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
							<a
								href="#"
								className="text-white px-3 py-1.5 text-sm duration-300 ease-in-out"
							>
								Projetos
							</a>
						</li>
						<li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
							<a
								href="#"
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
