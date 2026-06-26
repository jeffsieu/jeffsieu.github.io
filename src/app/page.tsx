'use client';

import BackToTopButton from '@/components/BackToTopButton';
import DottedBackground from '@/components/DottedBackground';
import FadingArrow from '@/components/FadingArrow';
import MagneticStar from '@/components/MagneticStar';
import NavLink from '@/components/NavLink';
import NextSectionButton from '@/components/NextSectionButton';
import ProjectCard from '@/components/ProjectCard';
import Section, { pageSections } from '@/components/Section';
import SkillChip from '@/components/SkillsChip';
import SocialLink from '@/components/SocialLink';
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
import { borderedBoxClassName } from '@/theme/styles';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen pb-16">
      <DottedBackground />
      <main className="flex flex-col gap-16 row-start-2 items-stretch">
        <section
          className={clsx(
            'flex flex-col items-start justify-center',
            'sm:flex-row sm:items-center',
            'flex gap-8 h-svh relative',
            'p-4 sm:p-8',
          )}
        >
          <MagneticStar
            strength={0.4}
            radius={220}
            className="scale-0 md:scale-100 absolute start-2/7 top-1/12 -rotate-12"
          >
            <Star24
              pathClassName="stroke-[8px] fill-cyan-500 stroke-black dark:fill-cyan-400 dark:stroke-white"
              width={96}
              height={96}
            />
          </MagneticStar>
          <MagneticStar strength={0.4} radius={250} className="absolute end-1/7 top-3/12 rotate-12">
            <Star20
              pathClassName="stroke-[7px] fill-amber-500 stroke-black dark:fill-amber-400 dark:stroke-white"
              width={128}
              height={128}
            />
          </MagneticStar>
          <MagneticStar
            strength={0.4}
            radius={300}
            className="absolute start-1/9 bottom-1/12 rotate-12"
          >
            <Star5
              pathClassName="stroke-[4px] fill-indigo-500 stroke-black dark:fill-indigo-400 dark:stroke-white"
              width={196}
              height={196}
            />
          </MagneticStar>
          <MagneticStar
            strength={0.4}
            radius={200}
            className="scale-0 sm:scale-100 absolute end-1/8 bottom-2/9 rotate-12"
          >
            <Star23
              pathClassName="stroke-[11px] fill-fuchsia-500 stroke-black dark:fill-fuchsia-400 dark:stroke-white"
              width={72}
              height={72}
            />
          </MagneticStar>
          <div className="flex flex-col sm:flex-row sm:items-center gap-8 relative z-10 sm:-ml-16">
            <Image
              alt="Logo"
              className="border-4 border-black dark:border-white relative z-10 box-content rounded -rotate-2"
              src="/logo.svg"
              width={100}
              height={100}
            />
            <div className="flex flex-col relative z-10">
              <div className="-rotate-2">
                <h1
                  className="text-6xl sm:text-8xl font-extrabold tracking-[-0.03em] leading-[0.95] relative z-10"
                  aria-label="Hi, I'm Jeff"
                >
                  Hi
                  <svg
                    width="0.6em"
                    height="1em"
                    viewBox="-1 0 10 20"
                    className="inline-block mx-1 align-middle mb-2"
                    aria-hidden="true"
                  >
                    <line
                      x1="5"
                      y1="2"
                      x2="0"
                      y2="18"
                      className="stroke-amber-500 dark:stroke-amber-400"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                    <line
                      x1="8"
                      y1="2"
                      x2="3"
                      y2="18"
                      className="stroke-amber-500 dark:stroke-amber-400"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                  I&apos;m Jeff
                </h1>
                <div className="bg-[#FFFDF5] dark:bg-neutral-800 border-4 border-black dark:border-white shadow-[4px_4px_0_0] shadow-black dark:shadow-white rounded px-6 py-3 mb-6 mr-2">
                  <p className="text-neutral-800 dark:text-neutral-100 text-lg sm:text-xl font-bold">
                    I enjoy creating delightful web experiences.
                  </p>
                </div>
              </div>
              <nav className="flex flex-wrap gap-3 -rotate-2">
                {pageSections.map((navLink) => (
                  <NavLink key={navLink.id} href={`#${navLink.id}`} label={navLink.label} />
                ))}
              </nav>
            </div>
          </div>
          <ThemeToggleButton className="top-0 end-0 m-4 sm:m-8 absolute flex justify-center" />
          <div className="bottom-8 left-0 right-0 absolute flex justify-center" aria-hidden>
            <FadingArrow />
          </div>
        </section>
        <Section
          id="projects"
          title="Projects"
          titleClassName="bg-red-200 dark:bg-red-700 border-4 rounded-lg px-4 leading-14 relative z-10"
          stars={
            <>
              <Star9
                aria-hidden
                className="absolute -top-9 -start-10 rotate-12"
                pathClassName="dark:fill-red-400 dark:stroke-white stroke-[10px] fill-red-500 stroke-black"
                width={64}
                height={64}
              />
              <Star9
                aria-hidden
                className="absolute -bottom-7 -end-15 -rotate-6 z-20"
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
              className="absolute -top-12 -start-12 rotate-12"
              pathClassName="stroke-[6px] fill-blue-500 stroke-black dark:fill-blue-400 dark:stroke-white"
              width={96}
              height={96}
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
          titleClassName="bg-green-200 dark:bg-green-700 border-4 rounded-lg px-4 leading-14 relative z-10"
          stars={
            <>
              <Star32
                aria-hidden
                className="absolute -top-11 -end-12 rotate-12"
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
                  className="absolute -top-4 -start-4 rotate-12"
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
                      <SocialLink
                        icon={social.icon}
                        href={social.href}
                        label={social.label}
                        color={social.color}
                      />
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
