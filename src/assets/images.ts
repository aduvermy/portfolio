import profilePic from '../assets/logo-pic.png';
import githubLogo from '../assets/github-logo.svg';
import linkedinLogo from '../assets/logo-linkedin.svg';
import wwwLogo from '../assets/logo-www.png';

export const images = {
  profile: profilePic,
  github: githubLogo,
  linkedin: linkedinLogo,
  www: wwwLogo,
} as const;

export type ImageKey = keyof typeof images;
