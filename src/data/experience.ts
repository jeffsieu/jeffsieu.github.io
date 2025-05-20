import { Skill } from './skills';

type Experience = {
	id: string;
	startDate: Date;
	endDate: Date;
	company: string;
	team: string;
	title: string;
	description: string;
	skills: Skill[];
};

export const experiences: Experience[] = [
	{
		id: 'tiktok',
		startDate: new Date('2023-01-01'),
		endDate: new Date('2023-11-01'),
		company: 'TikTok',
		team: 'Global E-commerce',
		title: 'Frontend Engineer Intern',
		skills: ['react', 'typescript', 'figma'],
		description: `Developed the frontend for the core products of TikTok Shop, a rising global e-commerce platform under TikTok, which has 1.7 billion monthly active users as of 2023.
❖ Led the UI design (Figma) and frontend technical implementation (React) of several new products, including Brand Portal sales statistics dashboard, an in-house feature toggle management platform, and a flowchart business strategy visualisation and construction tool.
❖ Maintained and improved continuously the seller statistics dashboard, TikTok Shop Seller Compass.`,
	},
];
