import { FeaturedProject, Project } from '@/data/projects';
import clsx from 'clsx';
import { IconType } from 'react-icons';
import { MdPlayArrow, MdOpenInNew, MdCode } from 'react-icons/md';
import Image from 'next/image';
import { borderedBoxClassName, borderedButtonNoColorsClassName } from '@/theme/styles';
import SkillChip from './SkillsChip';

function ProjectCardButton({
	href,
	label,
	icon: Icon,
}: {
	href: string;
	label: string;
	icon: IconType;
}) {
	return (
		<a
			className={clsx(
				borderedButtonNoColorsClassName,
				'flex gap-1 items-center',
				'dark:text-neutral-200 dark:border-neutral-200 dark:shadow-neutral-200',
				'dark:bg-black/20 dark:hover:bg-black/10 dark:focus-visible:bg-black/10',
				'bg-black/5 hover:bg-black/10 focus-visible:bg-black/10',
				'dark:bg-white/10 dark:hover:bg-white/20 dark:focus-visible:bg-white/20',
				'text-neutral-700 border-neutral-700 shadow-neutral-700',
				'font-semibold px-2 py-1',
			)}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			<Icon />
			<span>{label}</span>
		</a>
	);
}

export default function ProjectCard({
	project,
	className,
	style,
}: {
	project: Project | FeaturedProject;
	className?: string;
	style?: React.CSSProperties;
}) {
	return (
		<li
			className={clsx(
				borderedBoxClassName,
				'transition',
				'dark:bg-[color-mix(in_lch,_var(--color-neutral-900),_var(--color-bg)_20%)]',
				'bg-[color-mix(in_lch,_var(--color-neutral-100),_var(--color-bg)_20%)]',
				'text-[color-mix(in_lch,_var(--color-neutral-900),_var(--color-text)_20%)]',
				'dark:text-[color-mix(in_lch,_var(--color-neutral-100),_var(--color-text)_20%)]',
				'p-4',
				'group',
				'relative',
				className,
			)}
			style={
				{
					'--color-bg': `lch(from ${project.backgroundColor} 100% calc(c * 2) h)`,
					'--color-text': `lch(from ${project.backgroundColor} 100% calc(c * 2) h)`,
					...style,
				} as React.CSSProperties
			}
		>
			<div className="flex flex-col gap-2 justify-between h-full">
				<div className="flex flex-col gap-2">
					<div>
						<h3 className="font-bold text-2xl">{project.title}</h3>
						<ul aria-label="Skills used" className="flex flex-wrap gap-2 mt-2 mb-4">
							{project.skills.toSorted().map((skill) => {
								return <SkillChip key={skill} skill={skill} />;
							})}
						</ul>
					</div>
					<p className="text-neutral-700 dark:text-neutral-300">{project.description}</p>
				</div>
				<div className="flex mt-4 gap-2 flex-wrap">
					{project.demoLink && (
						<ProjectCardButton href={project.demoLink} label="Try it out" icon={MdPlayArrow} />
					)}
					{project.viewLink && (
						<ProjectCardButton href={project.viewLink} label="View" icon={MdOpenInNew} />
					)}
					{project.githubLink && (
						<ProjectCardButton href={project.githubLink} label="Source" icon={MdCode} />
					)}
				</div>
			</div>
			{'image' in project && (
				<Image
					src={project.image}
					alt={project.title}
					className="rounded-lg object-cover aspect-[16/9] w-full sm:group-even:-order-1"
					width={1000}
					height={1000}
					loading="lazy"
				/>
			)}
		</li>
	);
}
