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
	technologies: SkillDetail<Skill>[];
};

type SkillSection = {
	title: string;
	technologies: Skill[];
};

const skillSections: SkillSection[] = [
	{
		title: 'Frontend',
		technologies: ['flutter', 'next', 'react', 'svelte', 'gatsby', 'docusaurus', 'threejs', 'p5js'],
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
	color: string;
};

export const allSkills: {
	[S in Skill]: SkillDetail<S>;
} = {
	flutter: {
		id: 'flutter',
		title: 'Flutter',
		icon: SiFlutter,
		color: '#02569B',
	},
	next: {
		id: 'next',
		title: 'Next',
		icon: SiNextdotjs,
		color: '#000000',
	},
	react: {
		id: 'react',
		title: 'React',
		icon: SiReact,
		color: '#61DAFB',
	},
	svelte: {
		id: 'svelte',
		title: 'Svelte',
		icon: SiSvelte,
		color: '#FF3E00',
	},
	firebase: {
		id: 'firebase',
		title: 'Firebase',
		icon: SiFirebase,
		color: '#FFCA28',
	},
	nodejs: {
		id: 'nodejs',
		title: 'Node.js',
		icon: SiNodedotjs,
		color: '#339933',
	},
	sequelize: {
		id: 'sequelize',
		title: 'Sequelize.js',
		icon: SiSequelize,
		color: '#52B0E7',
	},
	solidity: {
		id: 'solidity',
		title: 'Solidity',
		icon: SiSolidity,
		color: '#363636',
	},
	android: {
		id: 'android',
		title: 'Android SDK',
		icon: SiAndroid,
		color: '#3DDC84',
	},
	figma: {
		id: 'figma',
		title: 'Figma',
		icon: SiFigma,
		color: '#F24E1E',
	},
	gimp: {
		id: 'gimp',
		title: 'GIMP',
		icon: SiGimp,
		color: '#5C5543',
	},
	html: {
		id: 'html',
		title: 'HTML',
		icon: SiHtml5,
		color: '#E34F26',
	},
	css: {
		id: 'css',
		title: 'CSS',
		icon: SiCss3,
		color: '#1572B6',
	},
	typescript: {
		id: 'typescript',
		title: 'TypeScript',
		icon: SiTypescript,
		color: '#3178C6',
	},
	postgresql: {
		id: 'postgresql',
		title: 'PostgreSQL',
		icon: SiPostgresql,
		color: '#336791',
	},
	c: {
		id: 'c',
		title: 'C',
		icon: SiC,
		color: '#A8B9CC',
	},
	dart: {
		id: 'dart',
		title: 'Dart',
		icon: SiDart,
		color: '#0175C2',
	},
	python: {
		id: 'python',
		title: 'Python',
		icon: SiPython,
		color: '#3776AB',
	},
	swift: {
		id: 'swift',
		title: 'Swift',
		icon: SiSwift,
		color: '#FA7343',
	},
	gatsby: {
		id: 'gatsby',
		title: 'Gatsby.js',
		icon: SiGatsby,
		color: '#663399',
	},
	docusaurus: {
		id: 'docusaurus',
		title: 'Docusaurus',
		icon: SiDocusaurus,
		color: '#2E8555',
	},
	threejs: {
		id: 'threejs',
		title: 'Three.js',
		icon: SiThreedotjs,
		color: '#000000',
	},
	p5js: {
		id: 'p5js',
		title: 'p5.js',
		icon: SiP5Dotjs,
		color: '#ED225D',
	},
	windowsForms: {
		id: 'windowsForms',
		title: 'Windows Forms',
		icon: null,
		color: '#0078D6',
	},
};

export const skillsWithImages: SkillSectionWithImage[] = skillSections.map(
	({ technologies, ...section }) => ({
		...section,
		technologies: technologies.map((skill) => allSkills[skill]),
	}),
);
