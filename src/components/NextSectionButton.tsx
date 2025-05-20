'use client';

import { borderedButtonClassName } from '@/theme/styles';
import { useEffect, useMemo, useState } from 'react';
import { useWindowScroll, useWindowSize } from '@uidotdev/usehooks';
import clsx from 'clsx';
import { MdArrowDownward } from 'react-icons/md';
import { navLinks } from '@/app/page';

const sections = navLinks;

export default function NextSectionButton({ className }: { className?: string }) {
	const [currentSection, setCurrentSection] = useState<string | null>(null);
	const [nextSection, setNextSection] = useState<string | null>(null);
	const [scroll] = useWindowScroll();
	const { height } = useWindowSize();

	useEffect(() => {
		const handleScroll = () => {
			if (scroll.y === null) return;

			const windowHeight = window.innerHeight;
			const scrollPosition = scroll.y;

			for (const section of sections) {
				const sectionElement = document.getElementById(section.id);

				if (!sectionElement) continue;
				const rect = sectionElement.getBoundingClientRect();

				const documentBottom = document.documentElement.scrollHeight;

				const hasScrolledPast = rect.top < windowHeight / 2;
				const isScrollAtBottomOfDocument = scrollPosition + windowHeight >= documentBottom;
				const isOver = hasScrolledPast || isScrollAtBottomOfDocument;

				if (!isOver) {
					setNextSection(section.id);
					setCurrentSection(section.id);
					return;
				}
			}

			setCurrentSection(sections[sections.length - 1].id);
			setNextSection(null);
		};

		handleScroll();
	}, [scroll]);

	const handleScrollToNext = () => {
		if (nextSection) {
			document.getElementById(nextSection)?.scrollIntoView(true);
		}
	};

	const opacity = (() => {
		if (scroll.y === null || height === null) return 0;

		const scrollY = scroll.y;
		const windowHeight = height;

		const scrollPercentage = scrollY / windowHeight;

		return Math.min(1, scrollPercentage - 1);
	})();

	const shouldShowButton = nextSection !== null && opacity > 0;

	const label = useMemo(() => {
		if (nextSection) {
			return sections.find((section) => section.id === nextSection)?.label;
		}

		return sections.find((section) => section.id === currentSection)?.label;
	}, [currentSection, nextSection]);

	return (
		<button
			className={clsx(
				borderedButtonClassName,
				'p-2 gap-1 transition font-semibold text-sm items-center',
				shouldShowButton && 'flex',
				!shouldShowButton && 'flex translate-y-[calc(100%+1rem)]',
				className,
			)}
			disabled={!nextSection}
			onClick={handleScrollToNext}
		>
			<MdArrowDownward size={24} />
			<span className="sr-only">Go to {label} section</span>
			<span aria-hidden>{label}</span>
		</button>
	);
}
