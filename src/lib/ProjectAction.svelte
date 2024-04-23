<script lang="ts">
	import type { Project } from '$lib/types';
	import { useQuery } from '@sveltestack/svelte-query';
	import GithubStarButton from './GithubStarButton.svelte';
	import ShadowButton from './ShadowButton.svelte';

	export let project: Project;

	const data = useQuery(
		['stars', project.githubLink],
		async () => {
			const res = await fetch(`https://api.github.com/repos/${project.githubLink}`);
			const data = await res.json();
			return data.stargazers_count as number;
		},
		{
			enabled: !!project.githubLink,
			cacheTime: 1000 * 60 * 60,
		},
	);

	console.log(stars);
</script>

<div class={$$props.class}>
	{#if project.demoLink}
		<ShadowButton
			href={project.demoLink}
			textColor={project.textColor}
			backgroundColor={project.backgroundColor}
		>
			<span class="material-symbols-sharp" aria-hidden="true">play_arrow</span>
			Try it out
		</ShadowButton>
	{/if}
	{#if project.viewLink}
		<ShadowButton
			href={project.viewLink}
			textColor={project.textColor}
			backgroundColor={project.backgroundColor}
		>
			<span class="material-symbols-sharp" aria-hidden="true">open_in_new</span>
			View
		</ShadowButton>
	{/if}
	<ShadowButton
		href={project.githubLink}
		textColor={project.textColor}
		backgroundColor={project.backgroundColor}
	>
		<span class="material-symbols-sharp" aria-hidden="true">code</span>
		Source
	</ShadowButton>
	<GithubStarButton githubHref={project.githubLink} />
</div>

<style>
	.project-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		align-items: center;
	}
</style>
