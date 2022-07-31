<script lang="ts">
	import ProjectDetails from '$lib/ProjectDetails.svelte';
	import ShadowButton from '$lib/ShadowButton.svelte';
	import type { Project, FeaturedProject } from '$lib/types';

	let y: number;
	let navbarHeight: number;

	const featuredProjects: FeaturedProject[] = [
		{
			title: 'Stops',
			subtitle: 'Flutter',
			description: 'A live bus timing app for buses in Singapore. Available on Google Play.',
			image: 'images/stops.png',
			viewLink: 'https://play.google.com/store/apps/details?id=com.jeffsieu.stops',
			githubLink: 'https://github.com/jeffsieu/stops-flutter',
			backgroundColor: '#E9F5F7',
			textColor: '#3E3E3E'
		},
		{
			title: 'Blocked',
			subtitle: 'Flutter',
			description:
				'You control a block. Knock into others to transfer control. Escape with the main block.',
			image: 'images/blocked.png',
			demoLink: 'https://slide.jeffsieu.com',
			githubLink: 'https://github.com/jeffsieu/blocked',
			backgroundColor: '#C2DFE2',
			textColor: '#28211A'
		},
		{
			title: 'quards',
			subtitle: 'Flutter',
			description: 'Solitaire written in Flutter.',
			image: 'images/quards.png',
			demoLink: 'https://quards.jeffsieu.com',
			githubLink: 'https://github.com/jeffsieu/quards',
			backgroundColor: '#F6FFF6',
			textColor: '#2B3237'
		},
		{
			title: 'another typing test',
			subtitle: 'Flutter',
			description: 'Test your typing speed with this typing test.',
			image: 'images/another_typing_test.png',
			demoLink: 'https://type.jeffsieu.com',
			githubLink: 'https://github.com/jeffsieu/type',
			backgroundColor: '#FFE0A6',
			textColor: '#27127B'
		}
	];

	const otherProjects: Project[] = [
		{
			title: 'NUS Computing Club Website',
			subtitle: 'React with Gatsby',
			description:
				"The website for NUS Students' Computing Club. Made while I was the IT Secretary there.",
			viewLink: 'https://nuscomputing.jeffsieu.com',
			githubLink: 'https://github.com/jeffsieu/nuscomputing',
			backgroundColor: '#28378F',
			textColor: '#EFEFEF'
		},
		{
			title: 'MIPS Converter',
			subtitle: 'Svelte with Typescript',
			description: 'Converts MIPS instructions to and from hex/binary.',
			demoLink: 'https://mips-converter.jeffsieu.com',
			githubLink: 'https://github.com/jeffsieu/mips-converter',
			backgroundColor: '#EFEFEF',
			textColor: '#2E394D'
		},
		{
			title: 'py-sudoku',
			subtitle: 'Python',
			description: 'A python package that solves sudoku puzzles.',
			viewLink: 'https://pypi.org/project/py-sudoku/',
			githubLink: 'https://github.com/jeffsieu/py-sudoku',
			backgroundColor: '#006DAD',
			textColor: '#FFDF76'
		},
		{
			title: 'txthlpr',
			subtitle: 'React with Typescript',
			description: 'Perform repetitive formatting tasks on text without the pain of repetition.',
			demoLink: 'https://txthlpr.jeffsieu.com',
			githubLink: 'https://github.com/jeffsieu/txthlpr',
			backgroundColor: '#201B2D',
			textColor: '#FFDF76'
		},
		{
			title: 'monke',
			subtitle: 'Windows Forms',
			description:
				'Add mechanical key switch noises to your boring membrane keyboard. Done for fun as a hackathon submission to Hack&Roll 2022.',
			viewLink: 'https://devpost.com/software/monke-jbdg0v',
			githubLink: 'https://github.com/jeffsieu/monke',
			backgroundColor: '#EEBED3',
			textColor: '#541F38'
		},
		{
			title: 'sprintf',
			subtitle: 'p5.js',
			description: 'An accessibility-first efficient input alternative. Created for NUSH Hack.',
			viewLink: 'https://devpost.com/software/4-way-keyboard',
			demoLink: 'https://orppra.github.io/sprintf',
			githubLink: 'https://github.com/orppra/sprintf',
			backgroundColor: '#d4cef5',
			textColor: '#082602'
		},
		{
			title: 'NUSMods Timetabler',
			subtitle: 'React',
			description:
				'Generate timetables for modules in National University of Singapore. Created for Hack&Roll 2021.',
			viewLink: 'https://devpost.com/software/time-tabler',
			githubLink: 'https://github.com/jeffsieu/timetabler',
			backgroundColor: '#FF9485',
			textColor: '#222324'
		},
		{
			title: 'Ping Pong Warz',
			subtitle: 'three.js',
			description:
				'Use your phone as a controller to play ping pong on your machine. Created for iNTUition v5.0.',
			viewLink: 'https://devpost.com/software/ping-pong-warz',
			githubLink: 'https://github.com/Enigmatrix/ping-pong-warz',
			backgroundColor: '#CEF5DD',
			textColor: '#0A3002'
		},
		{
			title: 'Metapaws',
			subtitle: 'Next, Solidity',
			description: 'Adopt an NFT dog, feed real dogs in need.',
			viewLink: 'https://dorahacks.io/buidl/3171',
			githubLink: 'https://github.com/jeffsieu/metapaws',
			backgroundColor: '#EB6F95',
			textColor: '#000000'
		},
		{
			title: 'AEGIS',
			subtitle: 'React, Sequelize, Node.js',
			description:
				'An algorithmically enhanced scheduling tool. Developed for the Republic of Singapore Air Force.',
			githubLink: 'https://github.com/jeffsieu/AEGIS-frontend',
			backgroundColor: '#2C4B9C',
			textColor: '#FFFFFF'
		},
		{
			title: 'Portfolio website',
			subtitle: 'Svelte, Typescript',
			description: 'My portfolio (this website) was built with Typescript Svelte.',
			githubLink: 'https://github.com/jeffsieu/jeffsieu.github.io',
			backgroundColor: '#FFFFFF',
			textColor: '#000000'
		}
	];

	const skills = [
		{
			title: 'Frontend',
			technologies: [
				{
					title: 'Flutter',
					image: 'images/techs/flutter.svg'
				},
				{
					title: 'Next',
					image: 'images/techs/nextjs.svg'
				},
				{
					title: 'React',
					image: 'images/techs/react.svg'
				},
				{
					title: 'Svelte',
					image: 'images/techs/svelte.svg'
				}
			]
		},
		{
			title: 'Backend',
			technologies: [
				{
					title: 'Firebase',
					image: 'images/techs/firebase.svg'
				},
				{
					title: 'NodeJS',
					image: 'images/techs/nodejs.svg'
				},
				{
					title: 'Sequelize ORM',
					image: 'images/techs/sequelize.svg'
				}
			]
		},
		{
			title: 'Web3',
			technologies: [
				{
					title: 'Solidity',
					image: 'images/techs/solidity.svg'
				}
			]
		},
		{
			title: 'Mobile',
			technologies: [
				{
					title: 'Android SDK',
					image: 'images/techs/android.svg'
				},
				{
					title: 'Flutter',
					image: 'images/techs/flutter.svg'
				}
			]
		},
		{
			title: 'Prototyping',
			technologies: [
				{
					title: 'Figma',
					image: 'images/techs/figma.svg'
				},
				{
					title: 'GIMP',
					image: 'images/techs/gimp.svg'
				}
			]
		},
		{
			title: 'Languages',
			technologies: [
				{
					title: 'HTML',
					image: 'images/techs/html.svg'
				},
				{
					title: 'CSS',
					image: 'images/techs/css.svg'
				},
				{
					title: 'TypeScript',
					image: 'images/techs/typescript.svg'
				},
				{
					title: 'PostgreSQL',
					image: 'images/techs/postgresql.svg'
				},
				{
					title: 'C',
					image: 'images/techs/c.svg'
				},
				{
					title: 'Dart',
					image: 'images/techs/dart.svg'
				},
				{
					title: 'Python',
					image: 'images/techs/python.svg'
				},
				{
					title: 'Solidity',
					image: 'images/techs/solidity.svg'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Jeff Sieu</title>
	<meta name="description" content="Hi, I'm Jeff Sieu!. I enjoy experimenting with UI/UX design." />

	<!-- Fonts -->
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>

	<!-- Normalize.css -->
	<link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css" />

	<link rel="stylesheet" href="/reset.css" />
	<link rel="stylesheet" href="/global.css" />

  {@html `<style>:root{--navbar-height:${navbarHeight}px;}</style>`}
</svelte:head>

<div
	class="nav-wrapper"
	style="--border-color: {y > 50 ? 'rgba(0,0,0,0.75)' : 'transparent'}"
	bind:clientHeight={navbarHeight}
>
	<nav class="main-nav section centered nav-section">
		<ul role="navigation">
			<img src="images/logo.svg" alt="" width="36" height="36" />
			<a class="navbar-icon fs-h3 fw-bold" href="#intro" alt="Home">
				<div aria-hidden="true">jeff</div>
				<div aria-hidden="true">sieu</div>
			</a>
			<li><ShadowButton href="#featuredProjects" target="_self">My projects</ShadowButton></li>
			<li><ShadowButton href="#skills" target="_self">Skills/tools</ShadowButton></li>
			<li><ShadowButton href="#otherProjects" target="_self">Other projects</ShadowButton></li>
		</ul>
	</nav>
</div>
<main id="id">
	<article id="intro">
		<section class="section centered split">
			<img id="mainImage" alt="" src="images/jeffsieu.jpg" />
			<div id="mainTitle">
				<h1 class="fw-regular fs-h1">Hi, I'm Jeff Sieu!</h1>
				<p class="" style="margin-top: 4rem">
					I enjoy good UI/UX design, and strive to develop products that not only look good, but
					feel good to use.
				</p>
				<p class="" style="margin-top: 1rem">
					Here, I showcase some of the things I have made/done.
				</p>
			</div>
		</section>
	</article>
	<article id="featuredProjects">
		<section class="section centered thin">
			<h2 class="heading fs-h2 fw-regular">My projects</h2>
		</section>
		<div class="project-list">
			{#each featuredProjects as project}
				<div class="project-background" style="background-color: {project.backgroundColor}">
					<section class="section project-section split centered">
						<div class="project-image">
							<img alt="" src={project.image} />
						</div>
						<ProjectDetails {project} class="project-details" />
					</section>
				</div>
			{/each}
		</div>
	</article>
	<article id="skills">
		<section class="section centered thin">
			<h2 class="heading fs-h2 fw-regular">Skills/tools</h2>
		</section>
		<section class="section centered no-top">
			<!-- svelte-ignore a11y-no-redundant-roles -->
			<ul role="list" class="main-skill-list">
				{#each skills as skill}
					<li>
						<p class="fs-h3 fw-bold">{skill.title}</p>
						<ul role="list" class="skill-list">
							{#each skill.technologies as tech}
								<li class="skill fs-h4 fw-medium">
									<img src={tech.image} alt="" width={48} height={48} />
									<span>{tech.title}</span>
								</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ul>
		</section>
	</article>
	<article id="otherProjects">
		<section class="section centered thin">
			<h2 class="heading fs-h2 fw-regular">Other projects I've worked on</h2>
		</section>
		<div class="project-list">
			{#each otherProjects as project}
				<section
					style="background-color: {project.backgroundColor}"
					class="section project-section"
				>
					<ProjectDetails {project} class="project-details" />
				</section>
			{/each}
		</div>
	</article>
</main>
<svelte:window bind:scrollY={y} style="--navbar-height: {navbarHeight}" />
<style>
	:root {
		--font-family: 'Poppins', sans-serif;
		font-weight: 400;
		font-family: var(--font-family);

		--fw-regular: 400;
		--fw-medium: 500;
		--fw-bold: 700;

		--fs-h1: 2.5rem;
		--fs-h2: 2rem;
		--fs-h3: 1.5rem;
		--fs-h4: 1.25rem;

		--fs-regular: 1rem;

		--shadow-color: rgba(0, 0, 0, 0.7);

		font-size: var(--fs-regular);
		scroll-behavior: smooth;
		scroll-padding-top: var(--navbar-height);
	}

	.fw-regular {
		font-weight: var(--fw-regular);
	}

	.fw-medium {
		font-weight: var(--fw-medium);
	}

	.fw-bold {
		font-weight: var(--fw-bold);
	}

	.fs-h1 {
		font-size: var(--fs-h1);
	}

	.fs-h2 {
		font-size: var(--fs-h2);
	}

	.fs-h3 {
		font-size: var(--fs-h3);
	}

	.fs-h4 {
		font-size: var(--fs-h4);
	}

	#mainImage {
		flex: 0;
		object-fit: cover;
		max-width: min(20rem, 33%);
		width: 100%;
		height: 100%;
		aspect-ratio: 1;
		max-height: 50vh;
	}

	#mainTitle {
		flex: 2;
	}

	.project-image {
		flex: 2;
		max-width: 24rem;
	}

	.project-image img {
		width: 100%;
		object-fit: contain;
	}

	#featuredProjects :global(.project-details) {
		flex: 3;
	}

	.section {
		padding-inline: 2rem;
		padding-block: 6rem;
	}

	.section.thin {
		padding-block: 3rem;
	}

	.section.centered {
		max-width: 1200px;
		flex: 1;
		margin: auto;
	}

	.section.no-top {
		padding-block-start: 0;
	}

	.split {
		display: flex;
		gap: 4rem;
	}

	#otherProjects .project-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(max(33%, 30em), 60em, 100%), 1fr));
	}

	.heading {
		padding-inline: 16px;
		padding-block: 12px;
		display: inline-block;
		position: sticky;
		background: white;
		border: 1px solid var(--shadow-color);
		box-shadow: 8px 8px 0px 0px var(--shadow-color);
		top: 0;
	}

	.skill {
		display: flex;
		gap: 1rem;
		align-items: center;
		padding: 1rem;
	}

	.skill-list {
		margin-block-start: 0.5rem;
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		border: 1px solid var(--shadow-color);
		box-shadow: 2px 2px 0px 0px var(--shadow-color);
	}

	.main-skill-list {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.main-nav > ul {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		list-style: none;
		gap: 1rem;
	}

	.nav-section {
		padding-block: 1rem;
	}

	.nav-wrapper {
		background: white;
		border-bottom: 2px solid var(--border-color);
		position: sticky;
		top: 0;
		z-index: 100;
		transition: all 0.2s ease-in-out;
	}

	.navbar-icon {
		display: flex;
		text-decoration: none;
		color: black;
		margin-inline-end: 2rem;
	}

	.navbar-icon > :first-child {
		font-weight: var(--fw-medium);
	}
	.navbar-icon > :nth-child(2) {
		transform: translateY(4px);
	}

	@media (max-width: 750px) {
		.split {
			flex-direction: column;
			padding-block: 2rem;
			gap: 2rem;
		}

		.project-image {
			max-width: max-content;
		}

		#mainImage {
			max-width: 20rem;
		}

		.navbar-icon {
			display: none;
		}
	}

	@media (min-width: 751px) {
		:global(#featuredProjects .project-list > :nth-child(2n) .project-section) {
			flex-direction: row-reverse;
		}

		#intro > .section {
			flex-direction: row-reverse;
		}
	}
</style>
