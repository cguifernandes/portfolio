import { useDefaultAnimation } from "../../utils/utils";
import BlurText from "../blur-text";
import { animated } from "@react-spring/web";
import { Icon } from "@iconify/react";
import CardStarBorder from "../card-star-border";
import Button from "../button";

const About = () => {
	const { animation: animationStyle, ref: refStyle } = useDefaultAnimation(50);
	const { animation: animationStyle2, ref: refStyle2 } =
		useDefaultAnimation(100);
	const { animation: animationStyle3, ref: refStyle3 } =
		useDefaultAnimation(150);
	const { animation: animationStyle4, ref: refStyle4 } =
		useDefaultAnimation(200);

	return (
		<section
			id="about"
			className="py-24 lg:py-48 flex-col max-w-7xl gap-y-8 items-center scroll-mt-8 px-6 lg:px-4 flex justify-center w-full"
		>
			<BlurText
				text="Guilherme Fernandes"
				delay={50}
				animateBy="words"
				direction="top"
				className="md:text-5xl text-3xl sm:text-4xl text-white font-bold text-center"
			/>
			<animated.p
				ref={refStyle}
				style={animationStyle}
				className="text-neutral-400 text-sm md:text-base text-center w-full"
			>
				Tenho uma grande paixão por criar sites e explorar novas tecnologias,
				sempre buscando novas maneiras de inovar e aprimorar minhas habilidades.
				Quando não estou codando, gosto de mergulhar na leitura de livros,
				assistir séries envolventes e dedicar um tempo para estudar e expandir
				meus conhecimentos.
			</animated.p>

			<Button
				patternClassName="w-full flex justify-center"
				delay={50}
				theme="primary"
				href="/curriculo.pdf"
				target="_blank"
				className="w-full lg:w-96"
			>
				Currículo
			</Button>

			<ul className="flex items-center gap-x-6">
				<animated.li ref={refStyle} style={animationStyle}>
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
				</animated.li>

				<animated.li ref={refStyle2} style={animationStyle2}>
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
				</animated.li>

				<animated.li ref={refStyle3} style={animationStyle3}>
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
				</animated.li>

				<animated.li ref={refStyle4} style={animationStyle4}>
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

			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 grid-rows-2">
				<CardStarBorder
					title="Design de interfaces"
					delay={50}
					subtitle="Crio interfaces visuais modernas e intuitivas para sites, garantindo uma ótima experiência para os usuários. Meu objetivo é transformar ideias em layouts atraentes e funcionais, sempre focando em usabilidade e identidade visual."
				/>
				<CardStarBorder
					title="Desenvolvimento web"
					delay={100}
					subtitle="Desenvolvo sites e aplicações completas, cuidando tanto da parte visual quanto da lógica por trás do funcionamento. Utilizo tecnologias modernas para criar sites rápidos, seguros e escaláveis."
				/>
				<CardStarBorder
					title="Otimização e manutenção de sites"
					delay={150}
					subtitle="Garanto que seu site esteja sempre rápido, seguro e atualizado. Faço otimizações de desempenho, melhorias em SEO para evitar problemas e garantir a melhor experiência para os visitantes."
				/>
				<CardStarBorder
					title="Criação de sites com WordPress"
					delay={200}
					subtitle="Construo sites profissionais e personalizados utilizando WordPress. Desde blogs até sites empresariais, entrego soluções flexíveis, responsivas e fáceis de gerenciar, garantindo que seu projeto tenha um ótimo desempenho online."
				/>
			</div>
		</section>
	);
};

export default About;
