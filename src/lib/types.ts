export type Project = {
	title: string;
	subtitle: string;
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
