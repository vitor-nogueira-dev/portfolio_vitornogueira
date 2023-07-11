import { ITab } from "@/interfaces/ITab";
import { IHardSkillsCardProps } from "@/interfaces/IHardSkillsCardProps";
import { IRedesSociais } from "@/interfaces/IRedesSoiais";
import { ISoftSkill } from "@/interfaces/ISoftSkill";
import { IWorkExperience } from "@/interfaces/IWorkExperience";
import { IProject } from "@/interfaces/IProject";

export const projectsFrontend: IProject[] = [
  {
    id: 'netflix',
    mobUrl: '/mobNetflix.png',
    deskUrl: '/deskNetflix.png',
    title: 'Clone Netflix',
    description: 'Clone da plataforma de streaming Netflix, desenvolvido utilizando React e Material UI.',
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
    mobUrl: '/mobFitClub.png',
    deskUrl: '/deskFitClub.png',
    title: 'FitClub',
    description: 'Este projeto consiste na criação de um site responsivo para uma academia. Foi desenvolvido utilizando as tecnologias React, CSS moderno e JavaScript. Para melhorar a funcionalidade e praticidade do site, foi incorporada a biblioteca E-mail.js, permitindo que os usuários insiram seus endereços de e-mail para contato, e essas informações sejam enviadas para a caixa de entrada do responsável pelo site. Além disso, foram utilizadas outras bibliotecas do React, como React Framer Motion e React Scroll, para adicionar animações e efeitos de rolagem ao site. O resultado é um site moderno, interativo e otimizado para dispositivos móveis, proporcionando uma experiência agradável aos usuários.',
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
    mobUrl: '/mobWeekAway.png',
    deskUrl: '/deskWeekAway.png',
    title: 'WeekAway',
    description: 'Neste projeto, foi desenvolvido um site responsivo utilizando o framework de estilização Tailwind CSS. A aplicação foi construída inteiramente em React e todo o design e layout foram implementados utilizando as classes e componentes fornecidos pelo Tailwind CSS. Além disso, a biblioteca React Icons foi utilizada para adicionar ícones ao site, oferecendo uma variedade de opções e estilos para aprimorar a experiência do usuário. O resultado é um site moderno, com um visual atraente e responsivo, garantindo uma experiência agradável em dispositivos de diferentes tamanhos e formatos.',
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
    mobUrl: '/mobWallet.png',
    deskUrl: '/deskWallet.png',
    title: 'Wallet',
    description: 'O objetivo deste projeto foi desenvolver uma carteira de controle de gastos com um conversor de moedas integrado. A aplicação permite que os usuários adicionem, removam e editem seus gastos, além de visualizar uma tabela com todas as despesas registradas. O diferencial está na funcionalidade de conversão de moedas, onde o usuário pode selecionar a moeda desejada e ver o total de gastos convertido para essa moeda específica. Isso proporciona uma visão mais abrangente dos gastos e ajuda a ter um controle financeiro mais preciso. Com essa carteira de controle de gastos intuitiva e o recurso de conversor de moedas, os usuários podem tomar decisões financeiras mais informadas e eficientes.',
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
    mobUrl: '/mobTunes.png',
    deskUrl: '/deskTunes.png',
    title: 'Tunes',
    description: 'Foi desenvolvido um aplicativo de músicas que utiliza a API do iTunes para buscar artistas e álbuns, reproduzir músicas, favoritar faixas e criar perfis personalizados. Os usuários poderão buscar e ouvir suas músicas favoritas, salvar suas escolhas no armazenamento local e criar e editar seus perfis com informações como nome, e-mail, foto de perfil e descrição.',
    stacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      '/styled-components.png',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    ],
    repositorio: 'https://github.com/vitor-nogueira-dev/trybe-tunes',
    deploy: 'https://trybetunes-vn.netlify.app/',
  },
  {
    id: 'MeuTime',
    mobUrl: '/mobMeuTime.png',
    deskUrl: '',
    title: 'Meu Time',
    description: 'Foi desenvolvido uma aplicação que permite visualizar informações detalhadas de um time de futebol e seus jogadores com base no país, liga, copa e temporada selecionados.',
    stacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      '/styled-components.png',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
    ],
    repositorio: 'https://github.com/vitor-nogueira-dev/meu-time',
    deploy: 'https://meutime-vn.netlify.app/',
  },
];

export const projectsBackend: IProject[] = [
  {
    id: 'StoreManager',
    mobUrl: undefined,
    title: 'Store Manager',
    description: 'Foi desenvolvido uma API de um sistema de gerenciamento de vendas no formato dropshipping em que é possível criar, visualizar, deletar e atualizar produtos e vendas.',
    stacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg',
    ],
    repositorio: 'https://github.com/vitor-nogueira-dev/store-manager',
    endpoints: [
      {
        method: 'GET',
        path: '/products',
        description: 'Retorna todos os produtos cadastrados',
      },
      {
        method: 'GET',
        path: '/products/:id',
        description: 'Retorna um produto específico com base no ID',
      },
      {
        method: 'GET',
        path: '/products/search?q=searchTerm',
        description: 'Pesquisa produtos com base em um termo de pesquisa',
      },
      {
        method: 'POST',
        path: '/products',
        description: 'Cadastra um novo produto e valida os dados',
      },
      {
        method: 'PUT',
        path: '/products/:id',
        description: 'Atualiza um produto existente com base no ID',
      },
      {
        method: 'DELETE',
        path: '/products/:id',
        description: 'Deleta um produto existente com base no ID',
      },
      {
        method: 'GET',
        path: '/sales',
        description: 'Retorna todas as vendas',
      },
      {
        method: 'GET',
        path: '/sales/:id',
        description: 'Retorna uma venda específica com base no ID',
      },
      {
        method: 'POST',
        path: '/sales',
        description: 'Valida e cadastra uma nova venda',
      },
      {
        method: 'PUT',
        path: '/sales/:id',
        description: 'Atualiza uma venda existente com base no ID',
      },
      {
        method: 'DELETE',
        path: '/sales/:id',
        description: 'Deleta uma venda existente com base no ID',
      }
    ]
  },
  {
    id: 'Blogs API',
    mobUrl: undefined,
    title: 'Blogs API',
    description: 'Foi desenvolvido uma API e um banco de dados para a produção de conteúdo em um blog',
    stacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg'
    ],
    repositorio: 'https://github.com/vitor-nogueira-dev/blogs-api',
    endpoints: [
      {
        method: 'POST',
        path: '/login',
        description: 'Realiza o login do usuário',
        authentication: 'N/A',
      },
      {
        method: 'POST',
        path: '/user',
        description: 'Adiciona um novo usuário',
        authentication: 'N/A',
      },
      {
        method: 'GET',
        path: '/user',
        description: 'Retorna todos os usuários',
        authentication: 'Token de autenticação',
      },
      {
        method: 'GET',
        path: '/user/:id',
        description: 'Retorna um usuário específico',
        authentication: 'Token de autenticação',
      },
      {
        method: 'POST',
        path: '/categories',
        description: 'Adiciona uma nova categoria',
        authentication: 'Token de autenticação',
      },
      {
        method: 'GET',
        path: '/categories',
        description: 'Retorna todas as categorias',
        authentication: 'Token de autenticação',
      },
      {
        method: 'POST',
        path: '/post',
        description: 'Adiciona um novo post e vincula às categorias',
        authentication: 'Token de autenticação',
      },
      {
        method: 'GET',
        path: '/post',
        description: 'Retorna todos os posts',
        authentication: 'Token de autenticação',
      },
      {
        method: 'GET',
        path: '/post/:id',
        description: 'Retorna um post específico',
        authentication: 'Token de autenticação',
      },
      {
        method: 'PUT',
        path: '/post/:id',
        description: 'Atualiza um post existente',
        authentication: 'Token de autenticação',
      },
      {
        method: 'DELETE',
        path: '/post/:id',
        description: 'Deleta um post existente',
        authentication: 'Token de autenticação',
      },
      {
        method: 'DELETE',
        path: '/user/me',
        description: 'Deleta o usuário logado',
        authentication: 'Token de autenticação',
      },
      {
        method: 'GET',
        path: '/post/search?q=term',
        description: 'Retorna os posts que correspondem ao termo de busca',
        authentication: 'Token de autenticação',
      },
    ],
  },
  {
    id: 'Trybe Smith',
    mobUrl: undefined,
    title: 'Trybe Smith',
    description: 'Foi desenvolvido uma API de uma loja de itens medievais utilizando Typescript e Sequelize. A aplicação foi organizada em camadas, incluindo os serviços (Services) e controladores (Controllers) para tratar as operações de criação, leitura e atualização de informações.',
    stacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg',
    ],
    repositorio: 'https://github.com/vitor-nogueira-dev/trybesmith-api',
    endpoints: [
      {
        method: 'POST',
        path: '/products',
        description: 'Cadastra um novo produto na tabela "products" do banco de dados.'
      },
      {
        method: 'GET',
        path: '/products',
        description: 'Lista todos os produtos cadastrados na tabela "products" do banco de dados.'
      },
      {
        method: 'GET',
        path: '/orders',
        description: 'Lista todos os pedidos cadastrados na tabela "orders" do banco de dados, incluindo os ids dos produtos associados a cada pedido.'
      },
      {
        method: 'POST',
        path: '/login',
        description: 'Realiza o login de um usuário, validando os campos "username" e "password" no banco de dados e retorna um token JWT contendo o id e o username do usuário autenticado.'
      },
      {
        method: 'POST',
        path: '/orders',
        description: 'Cadastra um novo pedido na tabela "orders" do banco de dados. Atualiza os produtos relacionados com os ids fornecidos na chave "productIds" com o orderId do pedido.'
      },
      {
        method: 'PUT',
        path: '/products/:id',
        description: 'Atualiza um produto existente com base no ID'
      }
    ],
  }
]

export const projectsFullstack: IProject[] = [
  {
    id: 'TFC',
    mobUrl: '',
    description: 'O TFC é um site informativo sobre partidas e classificações de futebol, onde você pode encontrar todas as informações relevantes sobre jogos de futebol.',
    title: 'Trybe Futebol Clube',
    stacks: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    ],
    repositorio: 'https://github.com/vitor-nogueira-dev/tfc-tybe-futebol-clube',
  }
]

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
    content: `No campo do desenvolvimento front-end, possuo uma ampla gama de conhecimentos e habilidades para criar interfaces de usuário modernas e responsivas. Sou especializado em tecnologias como ReactJS, NextJS, TypeScript e JavaScript, que são a base do desenvolvimento front-end atual.\n\n

    Tenho experiência no uso de bibliotecas e frameworks populares, como Redux, para gerenciamento de estado eficiente e escalável. Também estou familiarizado com ferramentas de teste, como Jest e React Testing Library, para garantir a qualidade do código por meio de testes automatizados abrangentes, tanto em nível unitário quanto de integração.\n\n
    
    Além disso, possuo habilidades sólidas em estilização de componentes, utilizando frameworks como Tailwind CSS, Material UI, React Suite, Framer Motion, Bootstrap, React Bootstrap e Styled Components. Tenho domínio de HTML e CSS, permitindo-me criar interfaces bem estruturadas e visualmente atraentes.\n\n
    
    Minha experiência em desenvolvimento front-end abrange desde a criação de interfaces de usuário dinâmicas até a implementação de práticas modernas de desenvolvimento, como componentização, padrões de design e arquitetura escalável.`,
  },
  {
    eventKey: 'backend',
    title: 'Back-end',
    content: `No campo do desenvolvimento back-end, possuo uma vasta experiência em tecnologias como Node.js, Typescript, Express e Docker. Utilizo essas tecnologias para criar APIs RESTful robustas, com sólidos conhecimentos na criação de endpoints eficientes e seguros. Além disso, possuo ampla experiência em bancos de dados SQL, como MySQL, Supabase e Firebase, e estou familiarizado com o uso do Sequelize como ORM para interagir com eles.\n\n

    Minha experiência em desenvolvimento back-end também inclui a implementação de autenticação e autorização em APIs, usando ferramentas como JWT (JSON Web Tokens). Tenho habilidades em lidar com requisições e respostas HTTP, manipulação de erros e validação de dados para garantir a integridade e segurança das informações transmitidas.\n\n

    Também tenho experiência em testes automatizados no back-end, utilizando ferramentas como Mocha, Chai e Sinon. Sou proficiente em testes unitários e de integração, o que me permite garantir a qualidade e a robustez do código. Além disso, possuo conhecimentos em práticas de programação orientada a objetos (POO) e utilizo o Docker para criar ambientes eficientes de desenvolvimento e produção.`,
  },
];
