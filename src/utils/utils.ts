import { useSpring } from "@react-spring/web";
import { easings } from "@react-spring/web";
import { SkillsProps } from "../types/type";

export const blurAnimation = {
	from: {
		filter: "blur(10px)",
		opacity: 0,
		transform: "translate3d(0,-50px,0)",
	},
	to: [
		{
			filter: "blur(5px)",
			opacity: 0.5,
			transform: "translate3d(0,5px,0)",
		},
		{ filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
	],
};

export const useDefaultAnimation = (delay?: number) => {
	return useSpring({
		from: blurAnimation.from,
		to: blurAnimation.to,
		config: {
			easing: easings.easeOutCubic,
		},
		delay,
	});
};

export const skills: SkillsProps[] = [
	{
		name: "Next.js",
		description:
			"Next.js é uma estrutura da web de desenvolvimento front-end que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos.",
	},
	{
		name: "React.js",
		description:
			"O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
	},
	{
		name: "Typescript",
		description:
			"TypeScript é uma extensão rigorosa de JavaScript que incorpora tipagem estática opcional. Ele oferece uma camada adicional de segurança e previsibilidade ao código, permitindo que os desenvolvedores detectem erros mais cedo no processo de desenvolvimento.",
	},
	{
		name: "Tailwind CSS",
		description:
			"Tailwind CSS é uma estrutura CSS de código aberto. Ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas.",
	},
	{
		name: "TypeORM",
		description:
			"TypeORM é um ORM (Object-Relational Mapper) para TypeScript e JavaScript, que facilita a interação com bancos de dados ao permitir que desenvolvedores trabalhem com objetos em vez de escrever queries SQL diretamente.",
	},
	{
		name: "Styled Components",
		description:
			"Styled Components permite que você escreva estilos CSS em seus componentes React usando uma sintaxe semelhante ao CSS.",
	},
	{
		name: "React Hook Form",
		description:
			"React Hook Form é uma biblioteca para gerenciamento de formulários em React, que melhora a performance e a simplicidade ao utilizar hooks para controlar estados e validações dos formulários.",
	},
	{
		name: "API’s",
		description:
			"Uma API (Application Programming Interface) é um conjunto de regras e definições que permite a comunicação entre diferentes sistemas de software, facilitando a integração e o compartilhamento de dados e funcionalidades.",
	},
	{
		name: "AWS",
		description:
			"AWS (Amazon Web Services) é uma plataforma de serviços de computação em nuvem da Amazon, que oferece uma ampla gama de serviços como armazenamento, processamento e banco de dados, permitindo escalabilidade e flexibilidade para aplicações de diversas naturezas.",
	},
	{
		name: "WordPress",
		description:
			"WordPress é um sistema livre e aberto de gestão de conteúdo para internet (do inglês: Content Management System - CMS), baseado em PHP com banco de dados MySQL e MariaDB.",
	},
];
