import { Skill } from './skills';

export type Project = {
  title: string;
  skills: Skill[];
  description: string;
  viewLink?: string;
  demoLink?: string;
  githubLink: string;
  backgroundColor: string;
  textColor: string;
};

export type FeaturedProject = Project & {
  image: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'AlgoSandbox',
    skills: ['react', 'typescript'],
    description:
      'An algorithm exploration platform allowing flexible and extensive step-by-step visualization of algorithms. Created for my Final Year Project in NUS.',
    image: '/algo_sandbox.webp',
    demoLink: 'https://algosandbox.com',
    githubLink: 'https://github.com/AlgoSandbox/AlgoSandbox',
    backgroundColor: '#0C346F',
    textColor: '#FFE4C5',
  },
  {
    title: 'Stops',
    skills: ['flutter'],
    description: 'A live bus timing app for buses in Singapore. Available on Google Play.',
    image: '/stops.webp',
    viewLink: 'https://play.google.com/store/apps/details?id=com.jeffsieu.stops',
    githubLink: 'https://github.com/jeffsieu/stops-flutter',
    backgroundColor: '#E9F5F7',
    textColor: '#3E3E3E',
  },
  {
    title: 'Blocked',
    skills: ['flutter'],
    description:
      'You control a block. Knock into others to transfer control. Escape with the main block.',
    image: '/blocked.webp',
    demoLink: 'https://blocked.jeffsieu.com',
    githubLink: 'https://github.com/jeffsieu/blocked',
    backgroundColor: '#C2DFE2',
    textColor: '#28211A',
  },
  {
    title: 'TypeScript from Zero',
    skills: ['docusaurus', 'typescript'],
    description:
      'A step-by-step TypeScript handbook with practical examples and hands-on exercises.',
    image: '/typescript_from_zero.webp',
    viewLink: 'https://jeffsieu.com/typescript-from-zero',
    githubLink: 'https://github.com/jeffsieu/typescript-from-zero',
    backgroundColor: '#297ED8',
    textColor: '#FFFFFF',
  },
  {
    title: 'quards',
    skills: ['flutter'],
    description: 'Solitaire written in Flutter.',
    image: '/quards.webp',
    demoLink: 'https://quards.jeffsieu.com',
    githubLink: 'https://github.com/jeffsieu/quards',
    backgroundColor: '#F6FFF6',
    textColor: '#2B3237',
  },
  {
    title: 'another typing test',
    skills: ['flutter'],
    description: 'Test your typing speed with this typing test.',
    image: '/another_typing_test.webp',
    demoLink: 'https://type.jeffsieu.com',
    githubLink: 'https://github.com/jeffsieu/type',
    backgroundColor: '#FFE0A6',
    textColor: '#27127B',
  },
];

export const otherProjects: Project[] = [
  {
    title: 'Tetris',
    skills: ['flutter'],
    description: 'A Tetris clone written in Flutter.',
    demoLink: 'https://tetris.jeffsieu.com',
    githubLink: 'https://github.com/jeffsieu/tetris-flutter',
    backgroundColor: '#563ba1',
    textColor: '#333333',
  },
  {
    title: 'SAF Name Tag Calculator',
    skills: ['typescript', 'react'],
    description:
      'Generates suitable names to put on the SAF No. 4 uniform name tag based on the name tag conventions as at 2024.',
    demoLink: 'https://safnametag.jeffsieu.com',
    githubLink: 'https://github.com/jeffsieu/saf-name-tag',
    backgroundColor: '#96B89C',
    textColor: '#233021',
  },
  {
    title: 'Space Peggle',
    skills: ['swift'],
    description:
      'A Swift iOS Peggle-like game built for the iPad. Made for the NUS iPad programming module CS3217.',
    githubLink: 'https://github.com/jeffsieu/space-peggle',
    backgroundColor: '#1F1F1F',
    textColor: '#ffc28a',
  },
  {
    title: 'NUS Computing Club Website',
    skills: ['react', 'gatsby'],
    description:
      "The website for NUS Students' Computing Club. Made while I was the IT Secretary there.",
    viewLink: 'https://nuscomputing.jeffsieu.com',
    githubLink: 'https://github.com/jeffsieu/nuscomputing',
    backgroundColor: '#28378F',
    textColor: '#EFEFEF',
  },
  {
    title: 'MIPS Converter',
    skills: ['typescript', 'svelte'],
    description: 'Converts MIPS instructions to and from hex/binary.',
    demoLink: 'https://mips-converter.jeffsieu.com',
    githubLink: 'https://github.com/jeffsieu/mips-converter',
    backgroundColor: '#EFEFEF',
    textColor: '#2E394D',
  },
  {
    title: 'py-sudoku',
    skills: ['python'],
    description: 'A python package that solves sudoku puzzles.',
    viewLink: 'https://pypi.org/project/py-sudoku/',
    githubLink: 'https://github.com/jeffsieu/py-sudoku',
    backgroundColor: '#005D94',
    textColor: '#FFDF76',
  },
  {
    title: 'txthlpr',
    skills: ['typescript', 'react'],
    description: 'Perform repetitive formatting tasks on text without the pain of repetition.',
    demoLink: 'https://txthlpr.jeffsieu.com',
    githubLink: 'https://github.com/jeffsieu/txthlpr',
    backgroundColor: '#201B2D',
    textColor: '#FFDF76',
  },
  {
    title: 'monke',
    skills: ['windowsForms'],
    description:
      'Add mechanical key switch noises to your boring membrane keyboard. Done for fun as a hackathon submission to Hack&Roll 2022.',
    viewLink: 'https://devpost.com/software/monke-jbdg0v',
    githubLink: 'https://github.com/jeffsieu/monke',
    backgroundColor: '#EEBED3',
    textColor: '#541F38',
  },
  {
    title: 'sprintf',
    skills: ['p5js'],
    description: 'An accessibility-first efficient input alternative. Created for NUSH Hack.',
    viewLink: 'https://devpost.com/software/4-way-keyboard',
    demoLink: 'https://orppra.github.io/sprintf',
    githubLink: 'https://github.com/orppra/sprintf',
    backgroundColor: '#d4cef5',
    textColor: '#082602',
  },
  {
    title: 'NUSMods Timetabler',
    skills: ['typescript', 'react'],
    description:
      'Generate timetables for modules in National University of Singapore. Created for Hack&Roll 2021.',
    viewLink: 'https://devpost.com/software/time-tabler',
    githubLink: 'https://github.com/jeffsieu/timetabler',
    backgroundColor: '#FF9485',
    textColor: '#222324',
  },
  {
    title: 'Ping Pong Warz',
    skills: ['threejs'],
    description:
      'Use your phone as a controller to play ping pong on your machine. Created for iNTUition v5.0.',
    viewLink: 'https://devpost.com/software/ping-pong-warz',
    githubLink: 'https://github.com/Enigmatrix/ping-pong-warz',
    backgroundColor: '#CEF5DD',
    textColor: '#0A3002',
  },
  {
    title: 'Metapaws',
    skills: ['next', 'solidity'],
    description: 'Adopt an NFT dog, feed real dogs in need.',
    viewLink: 'https://dorahacks.io/buidl/3171',
    githubLink: 'https://github.com/jeffsieu/metapaws',
    backgroundColor: '#EB6F95',
    textColor: '#000000',
  },
  {
    title: 'AEGIS',
    skills: ['react', 'sequelize', 'nodejs'],
    description:
      'An algorithmically enhanced scheduling tool for assigning monthly shifts, taking into account role and operational constraints.',
    githubLink: 'https://github.com/jeffsieu/AEGIS-frontend',
    backgroundColor: '#2C4B9C',
    textColor: '#FFFFFF',
  },
  {
    title: 'Old portfolio website',
    skills: ['typescript', 'svelte'],
    description: 'My old portfolio was built with TypeScript Svelte.',
    viewLink: 'https://old.jeffsieu.com',
    githubLink: 'https://github.com/jeffsieu/old-website',
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
  },
  {
    title: 'Portfolio website',
    skills: ['typescript', 'next'],
    description: 'This website was built with TypeScript NextJS.',
    githubLink: 'https://github.com/jeffsieu/jeffsieu.github.io',
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
  },
];
