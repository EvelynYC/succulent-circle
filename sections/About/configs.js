/* eslint-disable react/display-name */
import {
  EmailIcon,
  LinkedinIcon,
  GithubIcon,
  TwitterIcon,
} from '../../assets/socialIcons';

export const socials = [
  {
    name: 'email',
    getIcon: (fill) => <EmailIcon fill={fill} />,
  },
  {
    name: 'linkedin',
    getIcon: (fill) => <LinkedinIcon fill={fill} />,
    link: 'https://www.linkedin.com/in/yu-chun-chuang-987706b2/',
  },
  {
    name: 'github',
    getIcon: (fill) => <GithubIcon fill={fill} />,
    link: 'https://github.com/AislynYC',
  },
  {
    name: 'twitter',
    getIcon: (fill) => <TwitterIcon fill={fill} />,
    link: 'https://twitter.com/AislynYc',
  },
];
