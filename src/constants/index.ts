import { ITab } from "@/interfaces/ITab";
import { IHardSkillsCardProps } from "@/interfaces/IHardSkillsCardProps";
import { IProject } from "@/interfaces/IProject";
import { IRedesSociais } from "@/interfaces/IRedesSoiais";
import { ISoftSkill } from "@/interfaces/ISoftSkill";
import { IWorkExperience } from "@/interfaces/IWorkExperience";

export const projectsFrontend: IProject[] = [
  {
    id: 'netflix',
    deskUrl: '/deskNetflix.png',
    title: 'Netflix',
    stacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    ],
    repositorio: 'https://github.com/vitor-nogueira-dev/netflix',
    deploy: 'https://netflix-vn.netlify.app/',
  },
  {
    id: 'fitclub',
    deskUrl: '/deskFitClub.png',
    title: 'FitClub',
    stacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    ],
    repositorio: 'https://github.com/vitor-nogueira-dev/gym-fitclub',
    deploy: 'https://fitclub-vn.netlify.app/',
  },
  {
    id: 'weekaway',
    deskUrl: '/deskWeekAway.png',
    title: 'WeekAway',
    stacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    ],
    repositorio: 'https://github.com/vitor-nogueira-dev/weekaway',
    deploy: 'https://weekaway-vn.netlify.app/',
  },
  {
    id: 'Wallet',
    deskUrl: '/deskWallet.png',
    title: 'Wallet',
    stacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      '/styled-components.png',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    ],
    repositorio: 'https://github.com/vitor-nogueira-dev/trybe-wallet',
    deploy: 'https://trybe-wallet-vn.netlify.app/',
  },
  {
    id: 'Tunes',
    deskUrl: '/deskTunes.png',
    title: 'Tunes',
    stacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      '/styled-components.png',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    ],
    repositorio: 'https://github.com/vitor-nogueira-dev/trybe-tunes',
    deploy: 'https://trybetunes-vn.netlify.app/',
  },
];


export const softSkills: ISoftSkill[] = [
  {
    title: 'Habilidade em Resolver Problemas',
    subtitle:
      'Enfrento desafios com uma abordagem analítica e buscando soluções eficientes.',
    imgUrl: '/puzzle.png',
  },
  {
    title: 'Capacidade de Trabalhar em Equipe',
    subtitle:
      'Colaboro de forma efetiva, ouvindo os membros da equipe e contribuindo para alcançar objetivos comuns.',
    imgUrl: '/networking.png',
  },
  {
    title: 'Design Cuidadoso e Detalhado',
    subtitle:
      'Tenho um olhar minucioso para garantir que as interfaces sejam visualmente atraentes e funcionais.',
    imgUrl: '/loupe.png',
  },
  {
    title: 'Orientado a Processos e Resultados',
    subtitle:
      'Sigo metodologias e boas práticas para entregar projetos bem-sucedidos dentro do prazo e do orçamento.',
    imgUrl: '/bar-chart.png',
  },
  {
    title: 'Pensamento Criativo e Soluções Inovadoras',
    subtitle:
      'Busco constantemente maneiras criativas e inovadoras de abordar problemas e encontrar soluções.',
    imgUrl: '/idea.png',
  },
  {
    title: 'Curiosidade e Aprendizado Contínuo',
    subtitle:
      'Sou capaz de me adaptar a novas tecnologias e requisitos, buscando sempre aprender e evoluir.',
    imgUrl: '/mobile.png',
  },
];

export const wordExperience: IWorkExperience[] = [
  {
    imgUrl: '/cake.png',
    title: 'Doces da Hora',
    office: 'Sócio Proprietário',
    period: '2020 - 2022',
    activities: [
      '- Gerenciamento de todas as operações do negócio, incluindo a produção de doces e sobremesas, controle de estoque, vendas e atendimento ao cliente.',
      '- Estratégias de marketing e publicidade para aumentar o alcance e a visibilidade da empresa.',
    ],
  },
  {
    imgUrl: '/equipe.png',
    title: 'Espaço Avenida e restaurante',
    office: 'Gerente Geral',
    period: '2018 - 2020',
    activities: [
      '- Responsável por uma equipe de aproximadamente 14 colaboradores, com foco na melhoria contínua do desempenho e engajamento da equipe.',
      '- Responsável pela gestão de pessoas e rotinas de RH, incluindo recrutamento, treinamento e desenvolvimento de equipe.',
      '- Controle de qualidade das operações, assegurando o cumprimento das normas e padrões de segurança.',
    ],
  },
  {
    imgUrl: '/sales.png',
    title: 'Autônomo',
    office: 'Vendedor externo',
    period: '2010 - 2014',
    activities: [
      '- Vendas externas de produtos alimentícios, incluindo doces e salgados.',
      '- Atendimento ao cliente, incluindo negociação de preços e condições de pagamento.',
    ],
  },
];

export const socials: IRedesSociais[] = [
  {
    name: 'linkedin',
    url: '/linkedin.svg',
    link: 'https://www.linkedin.com/in/vitor-nogueira-dev/',
  },
  {
    name: 'github',
    url: '/github.svg',
    link: 'https://github.com/vitor-nogueira-dev',
  },
  {
    name: 'whatsapp',
    url: '/whatsapp.svg',
    link: 'https://wa.me/5531998193412',
  },
];

export const hardSkills: IHardSkillsCardProps[] = [
  {
    name: 'HTML',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    content:
      'Linguagem de marcação utilizada para estruturar o conteúdo de páginas web.',
  },
  {
    name: 'CSS',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    content:
      'Linguagem de estilo utilizada para definir a apresentação e o layout de páginas web.',
  },
  {
    name: 'Javascript',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    content:
      'Linguagem de programação utilizada para adicionar interatividade e comportamento às páginas web.',
  },
  {
    name: 'Typescript',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    content:
      'Superset do JavaScript que adiciona recursos de tipagem estática à linguagem.',
  },
  {
    name: 'React JS',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    content:
      'Biblioteca JavaScript utilizada para construir interfaces de usuário (UI) reativas e componentizadas.',
  },
  {
    name: 'Redux',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    content:
      'Biblioteca JavaScript utilizada para gerenciar o estado global de uma aplicação React.',
  },
  {
    name: 'Next JS',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    content:
      'Framework React utilizado para desenvolvimento de aplicações web do lado do servidor (SSR) e renderização estática (SSG).',
  },
  {
    name: 'Node JS',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    content:
      'Ambiente de execução JavaScript do lado do servidor, baseado no motor V8 do Google Chrome.',
  },
  {
    name: 'Express JS',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    content: 'Framework web rápido e flexível para aplicativos Node.js.',
  },
  {
    name: 'Sequelize',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg',
    content:
      'ORM (Object-Relational Mapping) em JavaScript para bancos de dados relacionais.',
  },
  {
    name: 'MySQL',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    content:
      'Sistema de gerenciamento de banco de dados relacional (RDBMS) popular.',
  },
  {
    name: 'Docker',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    content:
      'Plataforma de virtualização que permite empacotar e distribuir aplicativos em contêineres.',
  },
  {
    name: 'Git',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    content:
      'Sistema de controle de versão distribuído usado para rastrear mudanças no código-fonte durante o desenvolvimento de software.',
  },
  {
    name: 'Github',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    content:
      'Plataforma de hospedagem de código-fonte e colaboração que usa o Git.',
  },
  {
    name: 'Styled Components',
    url: '/styled-components.png',
    content:
      'Biblioteca para estilização em componentes React, utilizando CSS-in-JS.',
  },
  {
    name: 'Bootstrap',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
    content:
      'Framework front-end popular para desenvolvimento rápido e responsivo de sites e aplicativos.',
  },
  {
    name: 'Tailwind CSS',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    content:
      'Framework CSS utilitário que fornece classes pré-definidas para estilizar componentes.',
  },
  {
    name: 'Material UI',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    content:
      'Biblioteca de componentes React que implementa as diretrizes de design do Material Design.',
  },
  {
    name: 'Figma',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    content:
      'Ferramenta de design de interface de usuário (UI) e prototipagem colaborativa baseada na web.',
  },
  {
    name: 'Mocha',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg',
    content:
      'Framework de teste JavaScript executado no Node.js e no navegador.',
  },
  {
    name: 'Jest',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    content:
      'Framework de testes em JavaScript amplamente utilizado para testar aplicações e componentes React.',
  },
  {
    name: 'React Testing Library',
    url: '/testing-library.png',
    content:
      'Biblioteca de testes em JavaScript voltada para testar componentes React, seguindo princípios de teste de usuário final.',
  },
];

export const tabsAbout: ITab[] = [
  {
    eventKey: 'about',
    title: 'Sobre mim',
    content: ` Como desenvolvedor full stack com ênfase em front-end, trago uma trajetória de dedicação e curiosidade na área de tecnologia. Trabalhar desde os 12 anos despertou em mim uma grande vontade de alcançar meus objetivos, e ao longo dos anos desenvolvi uma mentalidade empreendedora e um forte foco em resultados.\n\n

    Me formei no curso de cozinheiro pelo Senac, onde pude adquirir habilidades valiosas em gestão de pessoas, liderança, trabalho em equipe, resiliência e capacidade de resolver problemas. Essas experiências moldaram minha trajetória e me trouxeram importantes aprendizados.\n\n
    
    Com o passar do tempo, minha paixão pela tecnologia ganhou espaço, e mergulhei de cabeça no desenvolvimento full stack, com foco especial em front-end. Adquiri habilidades sólidas em HTML, CSS, JavaScript e Typescript, além de frameworks como React, que me permitem criar experiências incríveis na web e interfaces de usuário intuitivas.\n\n
    
    A mescla dessas experiências no setor alimentício com minha busca incessante pelo aprimoramento técnico me tornaram um profissional completo. Tenho uma abordagem empreendedora, onde assumo a responsabilidade como se fosse o dono do negócio, e aplico minhas habilidades de gestão e resolução de problemas para entregar resultados de qualidade.\n\n
    
    Estou entusiasmado para aplicar todo o conhecimento adquirido ao longo dos anos em projetos inovadores na área de tecnologia. Sou resiliente diante dos desafios e estou sempre buscando aprender e crescer como profissional. Estou pronto para colaborar com equipes talentosas e fazer a diferença no campo da tecnologia, criando soluções incríveis e impactantes.`,
  },
  {
    eventKey: 'frontend',
    title: 'Front-end',
    content: `No campo do desenvolvimento front-end, possuo uma ampla gama de conhecimentos e habilidades para criar interfaces de usuário modernas e responsivas. Sou especializado em tecnologias como ReactJS, TypeScript e JavaScript, que são a base do desenvolvimento front-end atual.\n\n

    Tenho experiência no uso de bibliotecas e frameworks populares, como Redux, para gerenciamento de estado eficiente e escalável. Também estou familiarizado com ferramentas de teste, como Jest e React Testing Library, para garantir a qualidade do código por meio de testes automatizados abrangentes, tanto em nível unitário quanto de integração.\n\n
    
    Além disso, possuo habilidades sólidas em estilização de componentes, utilizando frameworks como Tailwind CSS, Material UI, Bootstrap e Styled Components. Tenho domínio de HTML e CSS, permitindo-me criar interfaces bem estruturadas e visualmente atraentes.\n\n
    
    Minha experiência em desenvolvimento front-end abrange desde a criação de interfaces de usuário dinâmicas até a implementação de práticas modernas de desenvolvimento, como componentização, padrões de design e arquitetura escalável.`,
  },
  {
    eventKey: 'backend',
    title: 'Back-end',
    content: `No campo do desenvolvimento back-end, possuo ampla experiência em tecnologias como Node.js, Express e Docker, que utilizo para criar APIs RESTful robustas. Tenho sólidos conhecimentos em API RESTful e sou habilidoso na criação de endpoints eficientes e seguros. Além disso, trabalhei com bancos de dados SQL, como MySQL, e estou familiarizado com o uso do Sequelize como ORM para interagir com eles.\n\n

    Também tenho experiência em testes automatizados no back-end, utilizando ferramentas como Mocha, Chai e Sinon. Sou proficiente em testes unitários e de integração, o que me permite garantir a qualidade e a robustez do código. Além disso, possuo conhecimentos em práticas de programação orientada a objetos (POO) e utilizo o Docker para criar ambientes eficientes de desenvolvimento e produção.`,
  },
];
