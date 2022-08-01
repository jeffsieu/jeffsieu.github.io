<script lang="ts">
	import type { Project } from '$lib/types';
	import ShadowButton from './ShadowButton.svelte';

	export let project: Project;
</script>

<div class={$$props.class}>
	{#if project.demoLink}
		<ShadowButton
			href={project.demoLink}
			textColor={project.textColor}
			backgroundColor={project.backgroundColor}
		>
			<i class="material-icons" aria-hidden="true">play_arrow</i>
			Try it out
		</ShadowButton>
	{/if}
	{#if project.viewLink}
		<ShadowButton
			href={project.viewLink}
			textColor={project.textColor}
			backgroundColor={project.backgroundColor}
		>
			<i class="material-icons" aria-hidden="true">open_in_new</i>
			View
		</ShadowButton>
	{/if}
	<ShadowButton
		href={project.githubLink}
		textColor={project.textColor}
		backgroundColor={project.backgroundColor}
	>
		<i class="material-icons" aria-hidden="true">code</i>
		Source
	</ShadowButton>
</div>

<style>
	.project-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
	}
</style>
