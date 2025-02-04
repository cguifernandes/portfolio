import { Languages, Sun } from "lucide-react";
import Logo from "../../assets/reduceLogo.svg";

const Header = () => {
	return (
		<div className="flex justify-center py-3 px-6 border-b border-neutral-800 bg-neutral-900/60 backdrop-blur-md fixed top-0 left-0 w-full">
			<header className="flex justify-between w-full max-w-6xl">
				<img src={Logo} alt="Logo" className="w-12" />
				<nav className="flex items-center">
					<ul className="flex items-center gap-4">
						<li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
							<a href="#" className="text-white px-3 py-1.5 text-sm">
								Sobre mim
							</a>
						</li>
						<li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
							<a href="#" className="text-white px-3 py-1.5 text-sm">
								Stacks
							</a>
						</li>
						<li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
							<a href="#" className="text-white px-3 py-1.5 text-sm">
								Projetos
							</a>
						</li>
						<li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
							<a href="#" className="text-white px-3 py-1.5 text-sm">
								Certificados
							</a>
						</li>
						<li className="hover:bg-neutral-800 rounded-lg flex duration-300 ease-in-out">
							<a href="#" className="text-white px-3 py-1.5 text-sm">
								Contato
							</a>
						</li>
						<li className="hover:bg-neutral-800 rounded-full flex duration-300 ease-in-out">
							<button type="button" className="px-2 py-2 cursor-pointer">
								<Sun color="#fff" size={14} />
							</button>
						</li>
						<li className="hover:bg-neutral-800 rounded-full flex duration-300 ease-in-out">
							<button type="button" className="px-2 py-2 cursor-pointer">
								<Languages color="#fff" size={14} />
							</button>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Header;
