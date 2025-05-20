import BackToTopButton from '@/components/BackToTopButton';
import FadingArrow from '@/components/FadingArrow';
import NextSectionButton from '@/components/NextSectionButton';
import ProjectCard from '@/components/ProjectCard';
import Section, { pageSections } from '@/components/Section';
import SkillChip from '@/components/SkillsChip';
import Star15 from '@/components/stars/Star15';
import Star20 from '@/components/stars/Star20';
import Star22 from '@/components/stars/Star22';
import Star23 from '@/components/stars/Star23';
import Star24 from '@/components/stars/Star24';
import Star32 from '@/components/stars/Star32';
import Star5 from '@/components/stars/Star5';
import Star9 from '@/components/stars/Star9';
import ThemeToggleButton from '@/components/ThemeToggleButton';
import { experiences } from '@/data/experience';
import { featuredProjects, otherProjects } from '@/data/projects';
import { skillsWithImages } from '@/data/skills';
import { socials } from '@/data/socials';
import {
	borderedBoxClassName,
	borderedButtonClassName,
	borderedButtonNoColorsClassName,
} from '@/theme/styles';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

export default function Home() {
	return (
		<div
			className={clsx(
				'bg-size-[1.3rem_1.3rem] bg-repeat-round bg-position-[0_0,_0.65rem_0.65rem]',
				'dark:bg-[radial-gradient(circle_at_center,_var(--color-neutral-900)_0.25rem,_transparent_0),radial-gradient(circle_at_center,_var(--color-neutral-900)_0.25rem,_transparent_0)]',
				'bg-[radial-gradient(circle_at_center,_var(--color-neutral-100)_0.25rem,_transparent_0),radial-gradient(circle_at_center,_var(--color-neutral-100)_0.25rem,_transparent_0)]',
				'min-h-screen',
				'pb-16',
			)}
		>
			<main className="flex flex-col gap-16 row-start-2 items-stretch">
				<section
					className={clsx(
						'flex flex-col items-start justify-center',
						'sm:flex-row sm:items-center',
						'flex gap-8 h-svh relative',
						'p-4 sm:p-8',
					)}
				>
					<Star24
						aria-hidden
						className="hidden md:block absolute start-2/7 top-1/12 -rotate-12"
						pathClassName="stroke-[8px] fill-cyan-500 stroke-black dark:fill-cyan-400 dark:stroke-white"
						width={96}
						height={96}
					/>
					<Star20
						aria-hidden
						className="absolute end-1/7 top-3/12 rotate-12"
						pathClassName="stroke-[7px] fill-amber-500 stroke-black dark:fill-amber-400 dark:stroke-white"
						width={128}
						height={128}
					/>
					<Star5
						aria-hidden
						className="absolute start-1/7 bottom-2/12 -translate-x-1/2 translate-y-1/2 rotate-12"
						pathClassName="stroke-[4px] fill-indigo-500 stroke-black dark:fill-indigo-400 dark:stroke-white"
						width={196}
						height={196}
					/>
					<Star23
						aria-hidden
						className="absolute end-1/7 bottom-3/12 translate-x-1/2 translate-y-1/2 rotate-12"
						pathClassName="stroke-[11px] fill-fuchsia-500 stroke-black dark:fill-fuchsia-400 dark:stroke-white"
						width={72}
						height={72}
					/>
					<Image
						alt="Logo"
						className="border-4 border-black dark:border-white relative z-10 box-content rounded"
						src="/logo.svg"
						width={100}
						height={100}
					/>
					<div className="flex flex-col relative z-10">
						<h1 className="text-4xl font-bold">Hi, I&apos;m Jeff</h1>
						<p className="text-neutral-600 dark:text-neutral-300 mb-4 font-medium">
							I enjoy creating delightful web experiences.
						</p>
						<nav className="flex flex-wrap gap-2">
							{pageSections.map((navLink) => (
								<a
									key={navLink.id}
									href={`#${navLink.id}`}
									className={clsx(
										borderedButtonClassName,
										'font-semibold sm:text-xl tracking-wider px-2 py-1',
									)}
								>
									{navLink.label}
								</a>
							))}
						</nav>
					</div>
					<ThemeToggleButton className="top-0 end-0 m-4 sm:m-8 absolute flex justify-center" />
					<div className="bottom-8 left-0 right-0 absolute flex justify-center" aria-hidden>
						<FadingArrow />
					</div>
				</section>
				<Section
					id="projects"
					title="Projects"
					titleClassName="bg-red-200 dark:bg-red-700 dark:border-white border-black border-4 rounded-lg px-4 leading-14 relative z-10"
					stars={
						<>
							<Star9
								aria-hidden
								className="absolute top-0 start-0 -translate-x-2/3 -translate-y-1/2 rotate-12"
								pathClassName="dark:fill-red-400 dark:stroke-white stroke-[10px] fill-red-500 stroke-black"
								width={64}
								height={64}
							/>
							<Star9
								aria-hidden
								className="absolute bottom-0 end-0 translate-x-3/4 translate-y-1/3 -rotate-6 z-20"
								pathClassName="dark:fill-red-400 dark:stroke-white stroke-[10px] fill-red-500 stroke-black"
								width={80}
								height={80}
							/>
						</>
					}
				>
					<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{featuredProjects.map((project, index) => (
							<ProjectCard
								key={project.title}
								className={clsx(
									'sm:col-span-2',
									'flex flex-col sm:grid grid-cols-2 gap-4',
									'lg:odd:col-start-1 lg:even:col-start-2',
									'lg:row-[var(--index)]',
								)}
								project={project}
								style={
									{
										'--index': index + 1,
									} as React.CSSProperties
								}
							/>
						))}
						{otherProjects.map((project) => (
							<ProjectCard key={project.title} project={project} />
						))}
					</ul>
				</Section>
				<Section
					id="experience"
					title="Experience"
					titleClassName="bg-blue-200 px-4 py-2 dark:bg-blue-700 rounded-lg leading-14 z-10 relative border-4"
					stars={
						<Star22
							aria-hidden
							className="absolute top-0 start-0 -translate-x-1/2 -translate-y-1/2 rotate-12"
							pathClassName="stroke-[6px] fill-blue-500 stroke-black dark:fill-blue-400 dark:stroke-white"
							width={100}
							height={100}
						/>
					}
				>
					<ul className="flex flex-col">
						{experiences.map((experience) => {
							return (
								<li
									key={experience.id}
									className={clsx(
										borderedBoxClassName,
										'transition',
										'bg-white dark:bg-neutral-900',
										'p-4 flex flex-col gap-4',
									)}
								>
									<div className="flex justify-between sm:flex-row flex-col-reverse">
										<div className="flex flex-col">
											<p className="text-3xl font-bold leading-8">{experience.company}</p>
											<p className="text-sm font-semibold mb-2 text-neutral-600 dark:text-neutral-300">
												{experience.team}
											</p>
											<p className="text-lg font-semibold">{experience.title}</p>
											<ul aria-label="Skills used" className="flex gap-2 mt-2 mb-4 flex-wrap">
												{experience.skills.toSorted().map((skill) => {
													return <SkillChip key={skill} skill={skill} />;
												})}
											</ul>
										</div>
										<p className="text-md sm:text-xl sm:font-bold shrink-0">
											{experience.startDate.toLocaleDateString('en-US', {
												year: 'numeric',
												month: 'short',
											})}{' '}
											-{' '}
											{experience.endDate.toLocaleDateString('en-US', {
												year: 'numeric',
												month: 'short',
											})}
										</p>
									</div>
									<p className="whitespace-pre-wrap">{experience.description}</p>
								</li>
							);
						})}
					</ul>
				</Section>
				<Section
					id="skills"
					title="Skills"
					titleClassName="bg-green-200 dark:bg-green-700 dark:border-white border-black border-4 rounded-lg px-4 leading-14 relative z-10"
					stars={
						<>
							<Star32
								aria-hidden
								className="absolute top-0 end-0 translate-x-1/2 -translate-y-3/7 rotate-12"
								pathClassName="stroke-[6px] fill-green-500 stroke-black dark:fill-green-400 dark:stroke-white"
								width={96}
								height={96}
							/>
						</>
					}
				>
					<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{skillsWithImages.map((section) => {
							return (
								<li
									key={section.title}
									className={clsx(
										borderedBoxClassName,
										'bg-white dark:bg-neutral-900',
										'flex flex-col gap-4 p-4',
										'@container',
									)}
								>
									<h3 className="text-2xl font-semibold">{section.title}</h3>
									<ul className={clsx('grid grid-cols-2 @sm:grid-cols-3 gap-2')}>
										{section.technologies
											.toSorted((a, b) =>
												a.title.localeCompare(b.title, undefined, { numeric: true }),
											)
											.map((skill) => {
												return (
													<li
														key={skill.id}
														className={clsx(
															borderedBoxClassName,
															'flex flex-col items-center gap-2 py-4 px-2 rounded-md',
															'bg-[color-mix(in_lch,_var(--color-neutral-100),_var(--color-bg)_20%)]',
															'dark:bg-[color-mix(in_lch,_var(--color-neutral-900),_var(--color-bg)_20%)]',
															'text-[color-mix(in_lch,_var(--color-neutral-900),_var(--color-text)_20%)]',
															'dark:text-[color-mix(in_lch,_var(--color-neutral-100),_var(--color-text)_20%)]',
														)}
														style={
															{
																'--color-bg': `lch(from ${skill.color} 100% c h)`,
																'--color-text': `lch(from ${skill.color} 100% c h)`,
															} as React.CSSProperties
														}
													>
														{skill.icon && <skill.icon />}
														<p className="text-sm text-center font-semibold">{skill.title}</p>
													</li>
												);
											})}
									</ul>
								</li>
							);
						})}
					</ul>
				</Section>
				<Section
					id="contact"
					title="Contact"
					titleClassName="underline decoration-amber-500 dark:decoration-amber-400 underline-offset-8"
				>
					<div className="flex justify-center self-stretch">
						<div
							className={clsx(
								borderedBoxClassName,
								'bg-white dark:bg-neutral-900 flex flex-1 max-w-xl',
								'flex-col sm:flex-row',
							)}
						>
							<figure
								className={clsx(
									borderedBoxClassName,
									'flex flex-col w-[200px] m-4 self-center sm:self-start relative',
								)}
							>
								<Star15
									className="absolute top-0 start-0 -translate-x-1/3 -translate-y-1/3 rotate-12"
									pathClassName="fill-amber-500 dark:fill-amber-400 stroke-black dark:stroke-white stroke-[10px]"
									width={48}
									height={48}
									aria-hidden
								/>
								<Image
									src="/jeff_sieu.webp"
									alt="A picture of Jeff Sieu at Gamcheon Culture Village in Korea"
									width={200}
									height={200}
								/>
								<figcaption
									className={clsx(
										'text-xs text-start p-2',
										'text-neutral-600 dark:text-neutral-300',
										'bg-neutral-100 dark:bg-neutral-800',
									)}
								>
									Me at <i>Gamcheon Culture Village</i>, Korea
								</figcaption>
							</figure>
							<div className="flex flex-col flex-1 gap-2 p-4">
								<div className="flex flex-col gap-0">
									<p className="font-semibold text-neutral-600 dark:text-neutral-300">
										Let&apos;s connect!
									</p>
									<h3 className="font-semibold text-xl" aria-label="Social links" id="socialLinks">
										Find me at
									</h3>
								</div>
								<ul className="flex flex-col gap-2" aria-labelledby="socialLinks">
									{socials.map((social) => (
										<li key={social.id}>
											<a
												href={social.href}
												className={clsx(
													borderedButtonNoColorsClassName,
													'flex gap-2 items-center px-4 py-2',
													'text-sm font-semibold',
													'bg-[color-mix(in_lch,_var(--color-neutral-100),_var(--color-bg)_20%)]',
													'dark:bg-[color-mix(in_lch,_var(--color-neutral-900),_var(--color-bg)_20%)]',
													'text-[color-mix(in_lch,_var(--color-neutral-900),_var(--color-text)_20%)]',
													'dark:text-[color-mix(in_lch,_var(--color-neutral-100),_var(--color-text)_20%)]',
												)}
												style={
													{
														'--color-text': `lch(from ${social.color} 100% calc(c * 2) h)`,
														'--color-bg': `lch(from ${social.color} 100% calc(c * 2) h)`,
													} as React.CSSProperties
												}
												target="_blank"
												rel="noreferrer"
											>
												<social.icon size={24} aria-label={social.label} />
												{social.label}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</Section>
			</main>
			<div className="flex gap-2 fixed bottom-0 end-0 m-4">
				<NextSectionButton />
				<BackToTopButton />
			</div>
		</div>
	);
}
