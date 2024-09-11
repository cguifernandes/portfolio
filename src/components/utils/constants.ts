export type ProjectsProps = {
	description: string;
	name: string;
	image: string[] | string;
	repo?: string;
	skills: string[];
	website?: string;
	figmaLink?: string;
	figmaAuthor?: string;
	additionalLink?: string;
};

export type SkillsProps = {
	name: string;
	description: string;
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
];

export const projects: ProjectsProps[] = [
	{
		description:
			"O Paquetá é um projeto de front-end que busca apresentar uma interface elegante e intuitiva para uma loja virtual de calçados.",
		name: "Paquetá",
		image: [
			"https://github.com/cguifernandes/Paqueta/assets/88489337/35b893bd-218b-41f6-ba92-f8fd3174761d",
			"https://github.com/user-attachments/assets/52e57808-6779-4e9f-849e-ba283f2b78ac",
			"https://github.com/user-attachments/assets/9feae71b-c47f-43f1-8991-4545a5165c48",
		],
		repo: "https://github.com/cguifernandes/Paqueta",
		skills: ["Next.js", "Tailwind CSS"],
		website: "https://paqueta-three.vercel.app/",
		figmaLink:
			"https://www.figma.com/design/df5XIaBPlnvzkMNUxhLFpq/Paqueta---BrChallenges?node-id=0-1&t=8R2K3vIoThD0Hric-0",
	},
	{
		description:
			"All Nade é um site projetado para ajudar você a descobrir filmes e facilitar a organização dos seus favoritos.",
		name: "All Nade",
		image: [
			"https://github.com/cguifernandes/All-Nade/assets/88489337/7fbf0e5c-35c6-44dc-bdc7-197ec4c90667",
			"https://github.com/user-attachments/assets/c913943c-64b4-4306-a08d-3cf6834ec139",
			"https://github.com/user-attachments/assets/7701e90c-567e-45d2-aef3-6e862c2d7a86",
		],
		repo: "https://github.com/cguifernandes/All-Nade",
		skills: ["Next.js", "Styled Components", "Typescript"],
		website: "https://all-nade.vercel.app/",
	},
	{
		description:
			"Minha primeira experiência como freelancer. Neste site, você pode acessar produtos de limpeza de pele, verificar o valor e entrar em contato com a vendedora.",
		name: "Bylou",
		image: [
			"https://github.com/cguifernandes/Bylou/assets/88489337/80e2960a-c29b-4caa-b89c-94f2c5556f8d",
			"https://github.com/user-attachments/assets/f2f32d23-603f-49e0-93ff-30a6c9537ec7",
			"https://github.com/user-attachments/assets/f2f32d23-603f-49e0-93ff-30a6c9537ec7",
		],
		skills: ["React.js", "Styled Components", "Typescript"],
		repo: "https://github.com/cguifernandes/Bylou",
		website: "https://bylou.vercel.app/",
	},
	{
		description:
			"Este projeto foi desenvolvido com o objetivo de praticar a criação de API'S juntamente com o consumo da API em um site em React.js.",
		name: "Wiki Demon Slayer",
		image: [
			"https://github.com/cguifernandes/Wiki-Kimetsu-No-Yaiba/assets/88489337/ca10dbd4-ab79-4d86-a463-6e1a1e78ecb7",
			"https://github.com/user-attachments/assets/b2ef3089-dd37-404a-b79d-a1fea96b0d36",
		],
		repo: "https://github.com/cguifernandes/Wiki-Kimetsu-No-Yaiba",
		skills: ["React.js", "CSS", "Javascript"],
		website: "https://wiki-kimetsu-no-yaiba.vercel.app/",
	},
	{
		description:
			"Este aplicativo surgiu da necessidade de oferecer maior dinamismo e interatividade para as aulas de Química, no formato on-line durante o período de pandemia. Neste contexto surgiu TITULOMED.",
		name: "TituloMED",
		image: [
			"https://github.com/cguifernandes/TituloMED/assets/88489337/fd369ea3-b705-43e7-8ee1-7053fe39d883",
		],
		repo: "https://github.com/cguifernandes/TituloMED",
		skills: ["HTML", "CSS", "Javascript"],
		website: "https://cguifernandes.github.io/TituloMED/",
	},
	{
		description:
			"Este projeto busca conectar pessoas a Desks, espaços para discussões em diferentes áreas. Por exemplo, se você é um desenvolvedor iniciante que deseja obter feedback sobre seu projeto, o Hub Desk está aqui para ajudar!",
		name: "Hub Desk",
		image: [
			"https://github.com/user-attachments/assets/df44c778-f982-48b4-a552-47119dd95bbd",
			"https://github.com/user-attachments/assets/71cfc0a3-ca6d-418a-9869-706d4553ca4f",
			"https://github.com/user-attachments/assets/1376fcae-8cf1-4859-95f9-79e0eb0b6c6e",
			"https://github.com/user-attachments/assets/cc4c9c49-684c-4748-bf52-3dec3abd4697",
		],
		repo: "https://github.com/cguifernandes/hub-desk",
		skills: ["Next.js", "Tailwind CSS", "Typescript"],
		website: "https://hub-desk.vercel.app",
	},
	{
		description:
			"Landing page simplificada inspirada no site da Nike, projetada para testar e aprimorar habilidades com a biblioteca Framer Motion, explorando técnicas avançadas de animação e transições para uma experiência visual dinâmica.",
		name: "Nike",
		image: [
			"https://github.com/user-attachments/assets/754bd2f3-f854-4c88-a540-b197e2a9cd26",
		],
		repo: "https://github.com/cguifernandes/nike",
		skills: ["React.js", "Tailwind CSS", "Framer motion"],
		figmaAuthor: "https://www.figma.com/@irawan",
		figmaLink:
			"https://www.figma.com/file/dKRjB9bKCYlkFbDQ367g12/Nike-Website-Redesign-(Community)?type=design&node-id=1-2&t=UekFqrZ5uwHNfMMO-0",
	},
	{
		description:
			"Projeto desenvolvido com o objetivo de ser um painel de licenças para uso da extensão. O site foi criado em conjunto com o desenvolvimento da própria extensão.",
		name: "Future Online",
		image: [
			"https://github.com/user-attachments/assets/be742bd1-e28a-4edf-ac15-7c8c9cf03f23",
		],
		additionalLink:
			"https://chromewebstore.google.com/detail/future-online/foookgcpbageggmhagkollgcdebifnal?hl=pt-BR&authuser=0",
		website: "https://futureonline.com.br/",
		skills: ["Node.js", "Tailwind CSS", "Next.js", "Server Actions", "S3/AWS"],
	},
];
