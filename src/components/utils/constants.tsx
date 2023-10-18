import NextJS from '../../assets/icons/nextjs.svg'
import ReactJS from '../../assets/icons/react.svg'
import Typecript from '../../assets/icons/typescript.svg'
import Tailwind from '../../assets/icons/tailwind.svg'
import Sass from '../../assets/icons/sass.svg'
import Python from '../../assets/icons/python.svg'
import CSharp from '../../assets/icons/csharp.svg'
import Java from '../../assets/icons/java.svg'
import StyledComponents from '../../assets/icons/styledcomponents.svg'
import Vue from '../../assets/icons/vue.svg'
import PHP from '../../assets/icons/php.svg'

export const skills = [
  {
    name: 'Next.js',
    description: 'Next.js é uma estrutura da web de desenvolvimento front-end que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos.',
    icon: NextJS
  },
  {
    name: 'React.js',
    description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
    icon: ReactJS
  },
  {
    name: 'Typescript',
    description: 'TypeScript é um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.',
    icon: Typecript
  },
  {
    name: 'Tailwind CSS',
    description: 'Tailwind CSS é uma estrutura CSS de código aberto. Ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas.',
    icon: Tailwind
  },
  {
    name: 'Sass',
    description: 'Sass é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum.',
    icon: Sass
  },
  {
    name: 'Python',
    description: 'Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.',
    icon: Python
  },
  {
    name: 'C#',
    description: 'C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET.',
    icon: CSharp
  },
  {
    name: 'Java',
    description: 'Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling.',
    icon: Java
  },
  {
    name: 'Styled Components',
    description: 'Styled Components permite que você escreva estilos CSS em seus componentes React usando uma sintaxe semelhante ao CSS.',
    icon: StyledComponents
  },
  {
    name: 'Vue.js',
    description: 'Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.',
    icon: Vue
  },
  {
    name: 'PHP',
    description: 'PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor. ',
    icon: PHP
  }
]

export const projects = [
  {
    description:
      'O Paquetá é um projeto de front-end que busca apresentar uma interface elegante e intuitiva para uma loja virtual de calçados.',
    name: 'Paquetá',
    image:
      'https://github.com/cguifernandes/Paqueta/assets/88489337/35b893bd-218b-41f6-ba92-f8fd3174761d',
    repo: 'https://github.com/cguifernandes/Paqueta',
    skills: ['Next.js', 'Tailwind CSS', 'Typescript'],
    website: 'https://paqueta-three.vercel.app/'
  },
  {
    description:
      'All Nade é um site projetado para ajudar você a descobrir filmes e facilitar a organização dos seus favoritos.',
    name: 'All Nade',
    image:
      'https://github.com/cguifernandes/All-Nade/assets/88489337/7fbf0e5c-35c6-44dc-bdc7-197ec4c90667',
    repo: 'https://github.com/cguifernandes/All-Nade',
    skills: ['Next.js', 'Styled Components', 'Typescript'],
    website: 'https://all-nade.vercel.app/'
  },
  {
    description:
      'Minha primeira experiência como freelancer. Neste site, você pode acessar produtos de limpeza de pele, verificar o valor e entrar em contato com a vendedora.',
    name: 'Bylou',
    image:
      'https://github.com/cguifernandes/Bylou/assets/88489337/80e2960a-c29b-4caa-b89c-94f2c5556f8d',
    skills: ['React.js', 'Styled Components', 'Typescript'],
    repo: 'https://github.com/cguifernandes/Bylou',
    website: 'https://bylou.vercel.app/'
  },
  {
    description:
      "Este projeto foi desenvolvido com o objetivo de praticar a criação de API'S juntamente com o consumo da API em um site em React.js.",
    name: 'Wiki Demon Slayer',
    image:
      'https://github.com/cguifernandes/Wiki-Kimetsu-No-Yaiba/assets/88489337/ca10dbd4-ab79-4d86-a463-6e1a1e78ecb7',
    repo: 'https://github.com/cguifernandes/Wiki-Kimetsu-No-Yaiba',
    skills: ['React.js', 'CSS', 'Javascript'],
    website: 'https://wiki-kimetsu-no-yaiba.vercel.app/'
  },
  {
    description:
      'Este aplicativo surgiu da necessidade de oferecer maior dinamismo e interatividade para as aulas de Química, no formato on-line durante o período de pandemia. Neste contexto surgiu TITULOMED.',
    name: 'TituloMED',
    image:
      'https://github.com/cguifernandes/TituloMED/assets/88489337/fd369ea3-b705-43e7-8ee1-7053fe39d883',
    repo: 'https://github.com/cguifernandes/TituloMED',
    skills: ['HTML', 'CSS', 'Javascript'],
    website: 'https://cguifernandes.github.io/TituloMED/'
  },
  {
    description:
      'Este projeto busca conectar pessoas a Desks, espaços para discussões em diferentes áreas. Por exemplo, se você é um desenvolvedor iniciante que deseja obter feedback sobre seu projeto, o Hub Desk está aqui para ajudar!',
    name: 'Hub Desk',
    image:
      'https://user-images.githubusercontent.com/88489337/269369577-cbbd292a-6b95-488b-b6ae-f55e6566ae15.png',
    repo: 'https://github.com/cguifernandes/hub-desk',
    skills: ['Next.js', 'Tailwind CSS', 'Typescript'],
    website: 'https://hub-desk.vercel.app'
  }
]
