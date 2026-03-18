import celiware from "../assets/companies/celiware.png";
import desweb from "../assets/companies/desweb.png";
import ecomplus from "../assets/companies/ecomplus.png";
import futureOnline from "../assets/companies/future-online.png";
import prime from "../assets/companies/prime.jpg";
import revzap from "../assets/companies/revzap.png";
import type {
  CareerProps,
  CompaniesProps,
  ProjectsProps,
  SkillsProps,
} from "../types/type";

export const skills: SkillsProps[] = [
  {
    name: "Next.js",
    description:
      "Next.js é uma estrutura da web de desenvolvimento front-end que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos.",
    experience: "4 anos exp",
  },
  {
    name: "React.js",
    description:
      "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
    experience: "5 anos exp",
  },
  {
    name: "Typescript",
    description:
      "TypeScript é uma extensão rigorosa de JavaScript que incorpora tipagem estática opcional. Ele oferece uma camada adicional de segurança e previsibilidade ao código, permitindo que os desenvolvedores detectem erros mais cedo no processo de desenvolvimento.",
    experience: "4 anos exp",
  },
  {
    name: "Tailwind CSS",
    description:
      "Tailwind CSS é uma estrutura CSS de código aberto. Ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas.",
    experience: "3 anos exp",
  },
  {
    name: "NestJS",
    description:
      "O NestJS é um framework para construção de aplicações back-end em Node.js, usando TypeScript como linguagem principal.",
    experience: "1 ano exp",
  },
  {
    name: "Elysia",
    description:
      "Elysia é um framework web para Node.js, focado em alta performance e simplicidade, especialmente para quem busca uma alternativa mais leve e eficiente ao Express.js.",
    experience: "Estudos e POCs",
  },
  {
    name: "React Hook Form",
    description:
      "React Hook Form é uma biblioteca para gerenciamento de formulários em React, que melhora a performance e a simplicidade ao utilizar hooks para controlar estados e validações dos formulários.",
    experience: "3 anos exp",
  },
  {
    name: "AWS",
    description:
      "AWS (Amazon Web Services) é uma plataforma de serviços de computação em nuvem da Amazon, que oferece uma ampla gama de serviços como armazenamento, processamento e banco de dados, permitindo escalabilidade e flexibilidade para aplicações de diversas naturezas.",
    experience: "2 anos exp",
  },
  {
    name: "WordPress",
    description:
      "WordPress é um sistema livre e aberto de gestão de conteúdo para internet (do inglês: Content Management System - CMS), baseado em PHP com banco de dados MySQL e MariaDB.",
    experience: "2 anos exp",
  },
  {
    name: "PostgreSQL",
    description:
      "PostgreSQL é um sistema gerenciador de banco de dados objeto relacional (SGBD), desenvolvido como projeto de código aberto.",
    experience: "3 anos exp",
  },
  {
    name: "MongoDB",
    description:
      "MongoDB é um banco de dados não relacional (NDBMS) de código aberto, desenvolvido como projeto de código aberto e baseado em JSON.",
    experience: "3 anos exp",
  },
  {
    name: "Vue.js",
    description:
      "Vue.js é um framework JavaScript progressivo usado para criar interfaces de usuário (UI) e aplicações web SPA (Single Page Applications). Ele se destaca por sua curva de aprendizado suave, ideal para iniciantes, e sua flexibilidade.",
    experience: "2 anos exp",
  },
  {
    name: "Discord.js",
    description:
      "Discord.js é uma bibloteca em Node.js poderosa que permite que você interaja com a API do Discord muito facilmente. Ela adota uma abordagem muito mais orientada a objetos do que a maioria das outras bibliotecas JS do Discord, tornando o código do seu bot significativamente mais organizado e fácil de compreender.",
    experience: "2 anos exp",
  },
  {
    name: "Laravel",
    description:
      "Laravel é um framework PHP livre e open-source criado por Taylor B. Otwell para o desenvolvimento de sistemas web que utilizam o padrão MVC (model, view, controller).",
    experience: "1 ano exp",
  },
  {
    name: "Inglês B2",
    description:
      "Tenho inglês em nível B2 (intermediário avançado), consigo me comunicar bem em contextos profissionais, participar de reuniões, ler documentação técnica e escrever textos com boa clareza.",
    experience: "6 anos exp",
  },
];

export const projects: ProjectsProps[] = [
  {
    id: "granaEmDia",
    description:
      "Site para controle financeiro pessoal. Nele é possível cadastrar despesas e receitas, criar categorias para transações, acessar um dashboard dinâmico com filtros por mês e ano.",
    name: "Grana em Dia",
    image: "https://i.ibb.co/mCjRXzs7/Screenshot-1.png",
    skills: ["React.js", "Laravel", "PostgreSQL", "Tailwind CSS", "Shadcn UI"],
    repo: "https://github.com/cguifernandes/grana-em-dia",
  },
  {
    id: "tectrain",
    description:
      "Site para gestão de consultorias de uma empresa de tecnologia. Nele é possível realizar atividades interativas, criar dashboards dinâmicos, utilizar chatbots com IA e gerenciar tabelas relacionais.",
    name: "Tectrain | Gestão de Consultório",
    image: "https://i.ibb.co/DPJwQHct/gc-6.png",
    skills: ["Vue.js", "Bootstrap", "C#"],
    website: "https://gc-app.tectrain.com.br/",
  },
  {
    id: "revzap",
    description:
      "Extensão para atendimento no WhatsApp Web, desenvolvida com o objetivo de aprimorar a experiência do cliente e aumentar a eficiência e produtividade da equipe de suporte.",
    name: "Revzap",
    image: "https://i.ibb.co/N6KB6Cm5/Captura-de-tela-2025-04-23-143013.png",
    skills: ["React.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
    website:
      "https://chromewebstore.google.com/detail/revzap/iadbakknogblchdohbbnnchfpojbcbll",
  },
  {
    id: "plasticaDeFace",
    description:
      "Projeto freelancer desenvolvido para o Dr. Leonardo, no qual fui responsável pela criação de um site profissional utilizando WordPress. O projeto envolveu a personalização do design, otimização de desempenho e implementação de funcionalidades específicas para atender às necessidades do cliente.",
    name: "Plástica de Face",
    image: "https://i.ibb.co/Qw6XVvf/Screenshot-2025-02-11-095651.png",
    skills: ["WordPress", "SEO"],
    website: "https://plasticadeface.med.br/",
  },
  {
    id: "futureOnline",
    description:
      "Projeto free-lancer desenvolvido para servir como um painel de gerenciamento de licenças para a extensão, garantindo controle e acessibilidade aos usuários. O site foi criado em paralelo ao desenvolvimento da própria extensão, proporcionando uma integração eficiente e uma experiência fluida.",
    name: "Future Online",
    image:
      "https://i.ibb.co/yn5Jf3hy/365851919-be742bd1-e28a-4edf-ac15-7c8c9cf03f23.png",
    additionalLink:
      "https://chromewebstore.google.com/detail/future-online/foookgcpbageggmhagkollgcdebifnal?hl=pt-BR&authuser=0",
    website: "https://futureonline.com.br/",
    skills: ["Node.js", "Tailwind CSS", "Next.js", "Server Actions", "S3/AWS"],
  },
  {
    id: "amorCelestial",
    description:
      "Projeto freelance desenvolvido para conectar almas gêmeas por meio da inteligência artificial da OpenAI. Utilizando tecnologias modernas como Next.js, TailwindCSS e a API da OpenAI, a plataforma analisa perfis e afinidades para proporcionar conexões significativas de forma inovadora e personalizada.",
    name: "Amor Celestial",
    image:
      "https://i.ibb.co/bjKCkrDf/384411038-3291adef-a6c0-4756-bf7b-e549e5a4adc8.png",
    website: "http://amorcelestial.net/",
    skills: ["Node.js", "Tailwind CSS", "Next.js", "Server Actions", "OpenIA"],
  },
  {
    id: "nike",
    description:
      "Landing page minimalista inspirada no design do site da Nike, criada para testar e aprimorar habilidades com a biblioteca Framer Motion. O projeto explora técnicas avançadas de animação e transições, proporcionando uma experiência visual fluida, envolvente e dinâmica.",
    name: "Nike",
    image:
      "https://i.ibb.co/1fY9KWH8/350497753-754bd2f3-f854-4c88-a540-b197e2a9cd26.png",
    repo: "https://github.com/cguifernandes/nike",
    skills: ["React.js", "Tailwind CSS", "Framer motion"],
  },
  {
    id: "paqueta",
    description:
      "O Paquetá é um projeto de front-end desenvolvido para oferecer uma interface elegante, intuitiva e responsiva para uma loja virtual de calçados. Com um design moderno e navegação fluida, a plataforma proporciona uma experiência envolvente para os usuários, facilitando a descoberta e compra de produtos.",
    name: "Paquetá",
    image:
      "https://i.ibb.co/Swh5xfCr/251443815-35b893bd-218b-41f6-ba92-f8fd3174761d.png",
    repo: "https://github.com/cguifernandes/Paqueta",
    skills: ["Next.js", "Tailwind CSS"],
    website: "https://paqueta-three.vercel.app/",
  },
  {
    id: "hubDesk",
    description:
      "Este projeto foi criado para conectar pessoas a Desks, espaços interativos para discussões em diversas áreas. Seja para trocar conhecimentos, compartilhar ideias ou receber feedback sobre um projeto, o Hub Desk oferece um ambiente colaborativo ideal. Por exemplo, se você é um desenvolvedor iniciante em busca de insights valiosos, aqui você encontra uma comunidade pronta para ajudar!",
    name: "Hub Desk",
    image:
      "https://i.ibb.co/VcWGXPfR/351426235-df44c778-f982-48b4-a552-47119dd95bbd.png",
    repo: "https://github.com/cguifernandes/hub-desk",
    skills: ["Next.js", "Tailwind CSS", "Typescript"],
    website: "https://hub-desk.vercel.app",
  },
  {
    id: "allNade",
    description:
      "O All Nade é um site desenvolvido para simplificar a descoberta de novos filmes e facilitar a organização dos seus favoritos. Com uma interface intuitiva e recursos práticos, a plataforma permite que você explore, salve e gerencie suas listas de filmes de forma rápida e eficiente.",
    name: "All Nade",
    image:
      "https://i.ibb.co/BV9mvJ6r/251448830-7fbf0e5c-35c6-44dc-bdc7-197ec4c90667.png",
    repo: "https://github.com/cguifernandes/All-Nade",
    skills: ["Next.js", "Styled Components", "Typescript"],
    website: "https://all-nade.vercel.app/",
  },
  {
    id: "tituloMed",
    description:
      "O TITULOMED é um aplicativo desenvolvido para atender à crescente demanda por maior dinamismo e interatividade nas aulas de Química, especialmente no contexto de ensino on-line durante a pandemia. Com ferramentas inovadoras e recursos interativos, o aplicativo foi criado para tornar o aprendizado de Química mais envolvente e acessível, promovendo uma experiência educativa mais rica e colaborativa para os alunos.",
    name: "TituloMED",
    image:
      "https://i.ibb.co/Ng3KXc9m/251451433-fd369ea3-b705-43e7-8ee1-7053fe39d883.png",
    repo: "https://github.com/cguifernandes/TituloMED",
    skills: ["HTML", "CSS", "Javascript"],
    website: "https://cguifernandes.github.io/TituloMED/",
  },
  {
    id: "wikiDemonSlayer",
    description:
      "Este projeto foi desenvolvido com o objetivo de praticar a criação de APIs e integrar o consumo dessas APIs em um site construído com React.js. Através dessa experiência, foram explorados aspectos de desenvolvimento back-end e front-end, permitindo uma interação fluida entre o servidor e o usuário final.",
    name: "Wiki Demon Slayer",
    image:
      "https://i.ibb.co/R4S0K7P9/251451080-ca10dbd4-ab79-4d86-a463-6e1a1e78ecb7.png",
    repo: "https://github.com/cguifernandes/Wiki-Kimetsu-No-Yaiba",
    skills: ["React.js", "CSS", "Javascript"],
    website: "https://wiki-kimetsu-no-yaiba.vercel.app/",
  },
];

export const companies: CompaniesProps[] = [
  {
    name: "Revzap",
    image: <img src={revzap} alt="Revzap" />,
  },
  {
    name: "Future Online",
    image: <img src={futureOnline} alt="Future Online" />,
  },
  {
    name: "Prime",
    image: <img src={prime} alt="Prime" />,
  },
  {
    name: "Ecomplus",
    image: <img src={ecomplus} alt="Ecomplus" />,
  },
  {
    name: "Desweb",
    image: <img src={desweb} alt="Desweb" />,
  },
  {
    name: "Celiware",
    image: <img src={celiware} alt="Celiware" />,
  },
];

export const career: CareerProps[] = [
  {
    id: "satellitus",
    company: "Satellitus Tecnologia",
    position: "Desenvolvedor Full-stack",
    startDate: "2026-01-02",
    isCurrent: true,
    stacks: ["PHP", "JavaScript", "HTML", "CSS", "SQL", "Python"],
    description:
      "Participo de ações para desenvolvimento e manutenção de sistemas legados, atuando em novas funcionalidades, correções e evolução das aplicações, além de colaborar no dia a dia com a equipe em melhorias contínuas.",
  },
  {
    id: "rami",
    company: "RAMI Indústria Gráfica",
    position: "Estagiário de TI",
    startDate: "2025-05-02",
    endDate: "2025-12-31",
    isCurrent: false,
    stacks: ["TI", "Suporte Técnico", "PHP", "MySQL"],
    description:
      "Atuei como estagiário de TI na RAMI Indústria Gráfica, realizando suporte técnico aos usuários, desenvolvimento de sistemas internos e manutenção de infraestrutura de TI.",
  },
  {
    id: "freelancer",
    company: "Free-lancer",
    position: "Desenvolvedor Full Stack",
    startDate: "2024-01-02",
    isCurrent: true,
    stacks: [
      "Next.js",
      "React.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    description:
      "Desenvolvimento de sites e aplicações web sob demanda para diversos clientes, desde o desenho da solução até o deploy em produção.",
  },
];

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", { month: "short", year: "numeric" });
};

export const formatFullDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
};
