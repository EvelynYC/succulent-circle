import conversaIcon from '@assets/portfolio/conversa.png';
import hidoIcon from '@assets/portfolio/hido.png';
import stylishIcon from '@assets/portfolio/Stylish.png';
import grithubIcon from '@assets/portfolio/grithub.png';

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
    title: 'grithub',
    description: 'grithubDescription',
    imageSrc: grithubIcon,
    techTags: [
      'React',
      'Redux',
      'RWD',
      'Styled Component',
      'Ant Design',
      'React Query',
      'Infinite scroll',
    ],
    link: null,
    githubLink: null,
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
    link: null,
    githubLink: null,
  },
];
