import conversaIcon from '@assets/portfolio/conversa.png';
import hidoIcon from '@assets/portfolio/hido.png';
import stylishIcon from '@assets/portfolio/Stylish.png';

export const projects = [
  {
    title: 'conversa',
    description: 'conversaDescription',
    imageSrc: conversaIcon,
    techTags: [
      'React',
      'Redux',
      'SPA',
      'Google Charts',
      'i18n',
      'RWD',
      'Material Design',
    ],
    link: 'https://conversa-a419b.firebaseapp.com',
    githubLink: 'https://github.com/AislynYC/conversa',
  },
  {
    title: 'hido',
    description: 'hidoDescription',
    imageSrc: hidoIcon,
    techTags: ['React', 'RWD', 'SPA', 'Gatsby', 'CSS module'],
    link: 'https://hido.tw/',
    githubLink: null,
  },
  {
    title: 'stylish',
    description: 'stylishDescription',
    imageSrc: stylishIcon,
    techTags: ['VanillaJS', 'RWD', 'infinite scroll', 'TapPay SDK'],
    link: 'https://aislynyc.github.io/STYLiSH/',
    githubLink: 'https://github.com/AislynYC/STYLiSH',
  },
];
