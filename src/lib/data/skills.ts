type Skill =
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
	| 'python';

type SkillSectionWithImage = {
	title: string;
	technologies: {
		id: Skill;
		title: string;
		image: string;
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
	image: string;
};

const skillDetails: {
	[S in Skill]: SkillDetail<S>;
} = {
	flutter: {
		id: 'flutter',
		title: 'Flutter',
		image: 'images/techs/flutter.svg',
	},
	next: {
		id: 'next',
		title: 'Next',
		image: 'images/techs/nextjs.svg',
	},
	react: {
		id: 'react',
		title: 'React',
		image: 'images/techs/react.svg',
	},
	svelte: {
		id: 'svelte',
		title: 'Svelte',
		image: 'images/techs/svelte.svg',
	},
	firebase: {
		id: 'firebase',
		title: 'Firebase',
		image: 'images/techs/firebase.svg',
	},
	nodejs: {
		id: 'nodejs',
		title: 'NodeJS',
		image: 'images/techs/nodejs.svg',
	},
	sequelize: {
		id: 'sequelize',
		title: 'Sequelize ORM',
		image: 'images/techs/sequelize.svg',
	},
	solidity: {
		id: 'solidity',
		title: 'Solidity',
		image: 'images/techs/solidity.svg',
	},
	android: {
		id: 'android',
		title: 'Android SDK',
		image: 'images/techs/android.svg',
	},
	figma: {
		id: 'figma',
		title: 'Figma',
		image: 'images/techs/figma.svg',
	},
	gimp: {
		id: 'gimp',
		title: 'GIMP',
		image: 'images/techs/gimp.svg',
	},
	html: {
		id: 'html',
		title: 'HTML',
		image: 'images/techs/html.svg',
	},
	css: {
		id: 'css',
		title: 'CSS',
		image: 'images/techs/css.svg',
	},
	typescript: {
		id: 'typescript',
		title: 'TypeScript',
		image: 'images/techs/typescript.svg',
	},
	postgresql: {
		id: 'postgresql',
		title: 'PostgreSQL',
		image: 'images/techs/postgresql.svg',
	},
	c: {
		id: 'c',
		title: 'C',
		image: 'images/techs/c.svg',
	},
	dart: {
		id: 'dart',
		title: 'Dart',
		image: 'images/techs/dart.svg',
	},
	python: {
		id: 'python',
		title: 'Python',
		image: 'images/techs/python.svg',
	},
	swift: {
		id: 'swift',
		title: 'Swift',
		image: 'images/techs/swift.svg',
	},
};

export const skillsWithImages: SkillSectionWithImage[] = skillSections.map(
	({ technologies, ...section }) => ({
		...section,
		technologies: technologies.map((skill) => skillDetails[skill]),
	}),
);
