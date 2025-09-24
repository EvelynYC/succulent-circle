/* eslint-disable react/display-name */
import {
  EmailIcon,
  LinkedinIcon,
  GithubIcon,
  TwitterIcon,
} from '../assets/socialIcons';

export const contacts = [
  {
    name: 'Email',
    getIcon: (fill) => <EmailIcon fill={fill} />,
    sendMail: () => window.open('mailto:chuang.yuchun@gmail.com'),
  },
  {
    name: 'Linkedin',
    getIcon: (fill) => <LinkedinIcon fill={fill} />,
    link: 'https://www.linkedin.com/in/yu-chun-chuang-987706b2/',
  },
  {
    name: 'Github',
    getIcon: (fill) => <GithubIcon fill={fill} />,
    link: 'https://github.com/EvelynYC',
  },
  {
    name: 'Twitter',
    getIcon: (fill) => <TwitterIcon fill={fill} />,
    link: 'https://twitter.com/AislynYc',
  },
];
