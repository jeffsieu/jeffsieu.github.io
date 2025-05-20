export const pageSections = [
	{
		id: 'projects',
		label: 'Projects',
	},
	{
		id: 'experience',
		label: 'Experience',
	},
	{
		id: 'skills',
		label: 'Skills',
	},
	{
		id: 'contact',
		label: 'Contact',
	},
];

type PageSection = (typeof pageSections)[number];

export default function Section<S extends PageSection>({
	id,
	title,
	children,
}: {
	id: S['id'];
	title: S['label'];
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col gap-8 p-4 sm:p-8">
			<h2 id={id} className="text-5xl font-medium self-center scroll-mt-8 font-['Changa_One']">
				{title}
			</h2>
			{children}
		</section>
	);
}
