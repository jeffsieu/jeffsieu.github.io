<script lang="ts">
	import ProjectDetails from '$lib/ProjectDetails.svelte';
	import ShadowButton from '$lib/ShadowButton.svelte';
	import JeffSieuImg from '$lib/assets/jeff_sieu.webp';
	import { featuredProjects, otherProjects } from '$lib/data/projects';
	import { skillsWithImages } from '$lib/data/skills';

	let y: number;
	let navbarHeight: number;
	$: navbarHeightStyle = `
		<style>
			:root{
					--navbar-height: ${navbarHeight}px;
			}
		</style>
	`;
</script>

<svelte:head>
	<title>Jeff Sieu</title>
	<meta name="description" content="Hi, I'm Jeff Sieu!. I enjoy experimenting with UI/UX design." />

	<!-- Fonts -->
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>

	<!-- Normalize.css -->
	<link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css" />

	<link rel="stylesheet" href="/reset.css" />

	{@html navbarHeightStyle}
</svelte:head>

<div
	class="nav-wrapper"
	style="--border-color: {y > 48 ? 'rgba(0,0,0,0.75)' : 'transparent'}"
	bind:clientHeight={navbarHeight}
>
	<nav class="main-nav section centered nav-section">
		<ul role="navigation">
			<li>
				<a
					href="#main"
					on:click={() => {
						y = 0;
					}}><img src="images/logo.svg" alt="Home" width="36" height="36" /></a
				>
			</li>
			<li aria-hidden="true" />
			<li><ShadowButton href="#featuredProjects" target="_self">My projects</ShadowButton></li>
			<li><ShadowButton href="#skills" target="_self">Skills/tools</ShadowButton></li>
			<li><ShadowButton href="#otherProjects" target="_self">Other projects</ShadowButton></li>
		</ul>
	</nav>
</div>
<main id="main">
	<article id="intro">
		<section class="section centered split">
			<img id="mainImage" alt="" src={JeffSieuImg} />
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
						<div
							class="project-image"
							style="--background-color: {project.backgroundColor}; --text-color: {project.textColor}"
						>
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
				{#each skillsWithImages as skill}
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

	@media (prefers-reduced-motion: reduce) {
		:root {
			scroll-behavior: auto;
		}
	}

	:global(.material-symbols-sharp) {
		font-variation-settings:
			'FILL' 1,
			'wght' 600,
			'GRAD' 0,
			'opsz' 48;
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
	}

	@media (min-width: 751px) {
		.project-section {
			align-items: start;
		}

		:global(#featuredProjects .project-list > :nth-child(2n) .project-section) {
			flex-direction: row-reverse;
		}

		#intro > .section {
			flex-direction: row-reverse;
		}
	}
</style>
