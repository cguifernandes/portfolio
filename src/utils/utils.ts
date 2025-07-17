import { ProjectsProps, SkillsProps } from "../types/type";

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
  {
    name: "PostgreSQL",
    description:
      "PostgreSQL é um sistema gerenciador de banco de dados objeto relacional (SGBD), desenvolvido como projeto de código aberto.",
  },
  {
    name: "MongoDB",
    description:
      "MongoDB é um banco de dados não relacional (NDBMS) de código aberto, desenvolvido como projeto de código aberto e baseado em JSON.",
  },
  {
    name: "Vue.js",
    description:
      "Vue.js é um framework JavaScript progressivo usado para criar interfaces de usuário (UI) e aplicações web SPA (Single Page Applications). Ele se destaca por sua curva de aprendizado suave, ideal para iniciantes, e sua flexibilidade",
  },
  {
    name: "Discord.js",
    description:
      "Discord.js é uma bibloteca em Node.js poderosa que permite que você interaja com a API do Discord muito facilmente. Ela adota uma abordagem muito mais orientada a objetos do que a maioria das outras bibliotecas JS do Discord, tornando o código do seu bot significativamente mais organizado e fácil de compreender.",
  },
  {
    name: "Laravel",
    description:
      "Laravel é um framework PHP livre e open-source criado por Taylor B. Otwell para o desenvolvimento de sistemas web que utilizam o padrão MVC (model, view, controller).",
  },
];

export const projects: ProjectsProps[] = [
  {
    description:
      "Site para controle financeiro pessoal. Nele é possível cadastrar despesas e receitas, criar categorias para transações, acessar um dashboard dinâmico com filtros por mês e ano.",
    name: "Grana em Dia",
    image: "https://i.ibb.co/mCjRXzs7/Screenshot-1.png",
    skills: ["React.js", "Laravel", "PostgreSQL", "Tailwind CSS", "Shadcn UI"],
    repo: "https://github.com/cguifernandes/grana-em-dia",
  },
  {
    description:
      "Site para gestão de consultorias de uma empresa de tecnologia. Nele é possível realizar atividades interativas, criar dashboards dinâmicos, utilizar chatbots com IA e gerenciar tabelas relacionais.",
    name: "Tectrain | Gestão de Consultório",
    image: "https://i.ibb.co/DPJwQHct/gc-6.png",
    skills: ["Vue.js", "Bootstrap", "C#"],
    website: "https://gc-app.tectrain.com.br/",
  },
  {
    description:
      "Extensão para atendimento no WhatsApp Web, desenvolvida com o objetivo de aprimorar a experiência do cliente e aumentar a eficiência e produtividade da equipe de suporte.",
    name: "Revzap",
    image: "https://i.ibb.co/N6KB6Cm5/Captura-de-tela-2025-04-23-143013.png",
    skills: ["React.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
    website:
      "https://chromewebstore.google.com/detail/revzap/iadbakknogblchdohbbnnchfpojbcbll",
  },
  {
    description:
      "Projeto freelancer desenvolvido para o Dr. Leonardo, no qual fui responsável pela criação de um site profissional utilizando WordPress. O projeto envolveu a personalização do design, otimização de desempenho e implementação de funcionalidades específicas para atender às necessidades do cliente.",
    name: "Plástica de Face",
    image: "https://i.ibb.co/Qw6XVvf/Screenshot-2025-02-11-095651.png",
    skills: ["WordPress", "SEO", "Otimização de desempenho"],
    website: "https://plasticadeface.med.br/",
  },
  {
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
    description:
      "Projeto freelance desenvolvido para conectar almas gêmeas por meio da inteligência artificial da OpenAI. Utilizando tecnologias modernas como Next.js, TailwindCSS e a API da OpenAI, a plataforma analisa perfis e afinidades para proporcionar conexões significativas de forma inovadora e personalizada.",
    name: "Amor Celestial",
    image:
      "https://i.ibb.co/bjKCkrDf/384411038-3291adef-a6c0-4756-bf7b-e549e5a4adc8.png",
    website: "http://amorcelestial.net/",
    skills: ["Node.js", "Tailwind CSS", "Next.js", "Server Actions", "OpenIA"],
  },
  {
    description:
      "Landing page minimalista inspirada no design do site da Nike, criada para testar e aprimorar habilidades com a biblioteca Framer Motion. O projeto explora técnicas avançadas de animação e transições, proporcionando uma experiência visual fluida, envolvente e dinâmica.",
    name: "Nike",
    image:
      "https://i.ibb.co/1fY9KWH8/350497753-754bd2f3-f854-4c88-a540-b197e2a9cd26.png",
    repo: "https://github.com/cguifernandes/nike",
    skills: ["React.js", "Tailwind CSS", "Framer motion"],
  },
  {
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
