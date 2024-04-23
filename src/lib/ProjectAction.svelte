<script lang="ts">
	import ShadowButton from './ShadowButton.svelte';
	import type { Project } from './data/projects';

	export let project: Project;
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
</div>

<style>
	.project-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
	}
</style>
