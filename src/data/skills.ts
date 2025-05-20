import { IconType } from 'react-icons';
import {
	SiAndroid,
	SiC,
	SiCss3,
	SiDart,
	SiDocusaurus,
	SiFigma,
	SiFirebase,
	SiFlutter,
	SiGatsby,
	SiGimp,
	SiHtml5,
	SiNextdotjs,
	SiNodedotjs,
	SiP5Dotjs,
	SiPostgresql,
	SiPython,
	SiReact,
	SiSequelize,
	SiSolidity,
	SiSvelte,
	SiSwift,
	SiThreedotjs,
	SiTypescript,
} from 'react-icons/si';

export type Skill =
	| 'flutter'
	| 'next'
	| 'react'
	| 'svelte'
	| 'firebase'
	| 'nodejs'
	| 'sequelize'
	| 'solidity'
	| 'android'
	| 'figma'
	| 'gimp'
	| 'html'
	| 'css'
	| 'typescript'
	| 'postgresql'
	| 'c'
	| 'dart'
	| 'swift'
	| 'python'
	| 'gatsby'
	| 'docusaurus'
	| 'threejs'
	| 'p5js'
	| 'windowsForms';

type SkillSectionWithImage = {
	title: string;
	technologies: {
		id: Skill;
		title: string;
		icon: IconType | null;
	}[];
};

type SkillSection = {
	title: string;
	technologies: Skill[];
};

const skillSections: SkillSection[] = [
	{
		title: 'Frontend',
		technologies: ['flutter', 'next', 'react', 'svelte'],
	},
	{
		title: 'Backend',
		technologies: ['firebase', 'nodejs', 'sequelize'],
	},
	{
		title: 'Web3',
		technologies: ['solidity'],
	},
	{
		title: 'Mobile',
		technologies: ['android', 'swift', 'flutter'],
	},
	{
		title: 'Prototyping',
		technologies: ['figma', 'gimp'],
	},
	{
		title: 'Languages',
		technologies: [
			'html',
			'css',
			'typescript',
			'postgresql',
			'c',
			'dart',
			'python',
			'solidity',
			'swift',
		],
	},
];

type SkillDetail<S extends Skill> = {
	id: S;
	title: string;
	icon: IconType | null;
};

export const allSkills: {
	[S in Skill]: SkillDetail<S>;
} = {
	flutter: {
		id: 'flutter',
		title: 'Flutter',
		icon: SiFlutter,
	},
	next: {
		id: 'next',
		title: 'Next',
		icon: SiNextdotjs,
	},
	react: {
		id: 'react',
		title: 'React',
		icon: SiReact,
	},
	svelte: {
		id: 'svelte',
		title: 'Svelte',
		icon: SiSvelte,
	},
	firebase: {
		id: 'firebase',
		title: 'Firebase',
		icon: SiFirebase,
	},
	nodejs: {
		id: 'nodejs',
		title: 'Node.js',
		icon: SiNodedotjs,
	},
	sequelize: {
		id: 'sequelize',
		title: 'Sequelize.js',
		icon: SiSequelize,
	},
	solidity: {
		id: 'solidity',
		title: 'Solidity',
		icon: SiSolidity,
	},
	android: {
		id: 'android',
		title: 'Android SDK',
		icon: SiAndroid,
	},
	figma: {
		id: 'figma',
		title: 'Figma',
		icon: SiFigma,
	},
	gimp: {
		id: 'gimp',
		title: 'GIMP',
		icon: SiGimp,
	},
	html: {
		id: 'html',
		title: 'HTML',
		icon: SiHtml5,
	},
	css: {
		id: 'css',
		title: 'CSS',
		icon: SiCss3,
	},
	typescript: {
		id: 'typescript',
		title: 'TypeScript',
		icon: SiTypescript,
	},
	postgresql: {
		id: 'postgresql',
		title: 'PostgreSQL',
		icon: SiPostgresql,
	},
	c: {
		id: 'c',
		title: 'C',
		icon: SiC,
	},
	dart: {
		id: 'dart',
		title: 'Dart',
		icon: SiDart,
	},
	python: {
		id: 'python',
		title: 'Python',
		icon: SiPython,
	},
	swift: {
		id: 'swift',
		title: 'Swift',
		icon: SiSwift,
	},
	gatsby: {
		id: 'gatsby',
		title: 'Gatsby.js',
		icon: SiGatsby,
	},
	docusaurus: {
		id: 'docusaurus',
		title: 'Docusaurus',
		icon: SiDocusaurus,
	},
	threejs: {
		id: 'threejs',
		title: 'Three.js',
		icon: SiThreedotjs,
	},
	p5js: {
		id: 'p5js',
		title: 'p5.js',
		icon: SiP5Dotjs,
	},
	windowsForms: {
		id: 'windowsForms',
		title: 'Windows Forms',
		icon: null,
	},
};

export const skillsWithImages: SkillSectionWithImage[] = skillSections.map(
	({ technologies, ...section }) => ({
		...section,
		technologies: technologies.map((skill) => allSkills[skill]),
	}),
);
