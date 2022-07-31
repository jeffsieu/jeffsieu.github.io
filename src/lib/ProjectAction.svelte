<div class={$$props.class}>
  {#if project.demoLink}
    <ShadowButton href={project.demoLink} {...project}>
      <i class="material-icons" aria-hidden="true">play_arrow</i>
      <span class="mdc-button__label">Try it out</span>
    </ShadowButton>
  {/if}
  {#if project.viewLink}
    <ShadowButton href={project.viewLink} {...project}>
      <i class="material-icons" aria-hidden="true">open_in_new</i>
      <span class="mdc-button__label">View</span>
    </ShadowButton>
  {/if}
  <ShadowButton href={project.githubLink} {...project} >
    <i class="material-icons" aria-hidden="true">code</i>
    Source
  </ShadowButton>
</div>

<script lang="ts">
  import type {Project} from "$lib/types";
  import ShadowButton from "./ShadowButton.svelte";

  export let project: Project;
</script>

<style>
  .project-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
  }

  .mdc-button--outlined {
    border-width: 2px;
    border-radius: 5px;
    color: var(--mdc-theme-primary);
  }
</style>