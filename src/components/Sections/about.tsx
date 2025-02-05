import { useDefaultAnimation } from "../../utils/utils";
import BlurText from "../blur-text";
import { animated } from "@react-spring/web";
import { Icon } from "@iconify/react";
import CardStarBorder from "../card-star-border";
import ButtonStarBorder from "../button-star-border";
const About = () => {
	return (
		<section className="flex items-center py-20 max-w-7xl justify-center flex-col gap-y-8">
			<BlurText
				text="Guilherme Fernandes"
				delay={150}
				animateBy="words"
				direction="top"
				className="text-5xl text-white font-bold text-center"
			/>
			<animated.p
				style={useDefaultAnimation(300)}
				className="text-neutral-400 text-center w-full"
			>
				Tenho uma grande paixão por criar sites e explorar novas tecnologias,
				sempre buscando novas maneiras de inovar e aprimorar minhas habilidades.
				Quando não estou codando, gosto de mergulhar na leitura de livros,
				assistir séries envolventes e dedicar um tempo para estudar e expandir
				meus conhecimentos.
			</animated.p>

			<ButtonStarBorder delay={300}>Currículo</ButtonStarBorder>

			<ul className="flex items-center gap-x-6">
				<animated.li style={useDefaultAnimation(300)}>
					<a
						href="#"
						className="rounded-lg cursor-pointer flex duration-300 ease-in-out group"
					>
						<Icon
							className="text-white duration-300 ease-in-out group group-hover:text-primary-500"
							fontSize={24}
							icon="mdi:gmail"
						/>
					</a>
				</animated.li>

				<animated.li style={useDefaultAnimation(350)}>
					<a
						href="#"
						className="rounded-lg cursor-pointer flex duration-300 ease-in-out group"
					>
						<Icon
							className="text-white duration-300 ease-in-out group group-hover:text-primary-500"
							fontSize={24}
							icon="mdi:instagram"
						/>
					</a>
				</animated.li>

				<animated.li style={useDefaultAnimation(400)}>
					<a
						href="#"
						className="rounded-lg cursor-pointer flex duration-300 ease-in-out group"
					>
						<Icon
							className="text-white duration-300 ease-in-out group group-hover:text-primary-500"
							fontSize={24}
							icon="mdi:linkedin"
						/>
					</a>
				</animated.li>

				<animated.li style={useDefaultAnimation(450)}>
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
				</animated.li>
			</ul>

			<div className="grid grid-cols-2 gap-x-4 gap-y-2 grid-rows-2">
				<CardStarBorder
					title="Design de interfaces"
					delay={300}
					subtitle="Crio interfaces visuais modernas e intuitivas para sites, garantindo uma ótima experiência para os usuários. Meu objetivo é transformar ideias em layouts atraentes e funcionais, sempre focando em usabilidade e identidade visual."
				/>
				<CardStarBorder
					title="Desenvolvimento web"
					delay={300}
					subtitle="Desenvolvo sites e aplicações completas, cuidando tanto da parte visual quanto da lógica por trás do funcionamento. Utilizo tecnologias modernas para criar sites rápidos, seguros e escaláveis."
				/>
				<CardStarBorder
					title="Otimização e manutenção de sites"
					delay={300}
					subtitle="Garanto que seu site esteja sempre rápido, seguro e atualizado. Faço otimizações de desempenho, melhorias em SEO para evitar problemas e garantir a melhor experiência para os visitantes."
				/>
				<CardStarBorder
					title="Criação de sites com WordPress"
					delay={300}
					subtitle="Construo sites profissionais e personalizados utilizando WordPress. Desde blogs até sites empresariais, entrego soluções flexíveis, responsivas e fáceis de gerenciar, garantindo que seu projeto tenha um ótimo desempenho online."
				/>
			</div>
		</section>
	);
};

export default About;
