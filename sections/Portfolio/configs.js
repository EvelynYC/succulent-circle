import icon from '@assets/portfolio/conversa.png';
import icon2 from '@assets/portfolio/hido.png';

export const projects = [
  {
    title: 'Conversa',
    description:
      '是一個簡易的簡報編輯器，使你能輕鬆在你的簡報中加入意見調查及即時圖表，並能即時投影調查結果，與聽眾進行互動。',
    imageSrc: icon,
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
    title: '堂爺爺文旦園',
    description:
      '一頁式的文旦農園網站，利用 Gatsby 快速建立靜態網站，並獲得良好的 SEO。',
    imageSrc: icon2,
    techTags: [
      'React',
      'RWD',
      'SPA',
      'Gatsby',
      'CSS module',
    ],
    link: 'https://hido.tw/',
    githubLink: null,
  },
];
