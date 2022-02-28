<div class={$$props.class}>
  {#if project.demoLink}
    <a class="mdc-button mdc-button--raised mdc-button--icon-leading" href={project.demoLink} target="_blank"
      style="--mdc-theme-primary: {project.textColor}; --mdc-theme-on-primary: {project.backgroundColor}">
      <i class="material-icons mdc-button__icon" aria-hidden="true">play_arrow</i>
      <span class="mdc-button__label">Try it out</span>
    </a>
  {/if}
  {#if project.viewLink}
    <a class="mdc-button mdc-button--raised mdc-button--icon-leading" href={project.viewLink} target="_blank"
      style="--mdc-theme-primary: {project.textColor}; --mdc-theme-on-primary: {project.backgroundColor}">
      <i class="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
      <span class="mdc-button__label">View</span>
    </a>
  {/if}
  <a class="mdc-button mdc-button--outlined mdc-button--icon-leading" style="--mdc-theme-primary: {project.textColor}" href={project.githubLink}>
    <span class="mdc-button__ripple"></span>
    <i class="material-icons mdc-button__icon" aria-hidden="true">code</i>
    <span class="mdc-button__label">Source</span>
  </a>
</div>

<script lang="ts">
  import type {Project} from "$lib/types";

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