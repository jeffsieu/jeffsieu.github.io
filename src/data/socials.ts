import { IconType } from 'react-icons';
import { MdMail } from 'react-icons/md';
import { SiBuymeacoffee, SiDevdotto, SiGithub, SiLinkedin } from 'react-icons/si';

type SocialLink = {
  id: string;
  icon: IconType;
  href: string;
  label: string;
  platform: string;
  color: string;
};

export const socials: SocialLink[] = [
  {
    id: 'linkedin',
    icon: SiLinkedin,
    href: 'https://www.linkedin.com/in/jeffsieu/',
    label: 'Jeff Sieu',
    platform: 'LinkedIn',
    color: '#0b66c2',
  },
  {
    id: 'github',
    icon: SiGithub,
    href: 'https://github.com/jeffsieu',
    label: '@jeffsieu',
    platform: 'GitHub',
    color: '#181717',
  },
  {
    id: 'devto',
    icon: SiDevdotto,
    href: 'https://dev.to/jeffsieu',
    label: '@jeffsieu',
    platform: 'Dev.to',
    color: '#0A0A0A',
  },
  {
    id: 'email',
    icon: MdMail,
    href: 'mailto:jeffsieu@gmail.com',
    label: 'jeffsieu@gmail.com',
    platform: 'Email',
    color: '#EA4335',
  },
  {
    id: 'buymeacoffee',
    icon: SiBuymeacoffee,
    href: 'https://buymeacoffee.com/jeffsieu',
    label: 'Buy me a coffee',
    platform: 'Buy Me a Coffee',
    color: '#FFDD00',
  },
];
