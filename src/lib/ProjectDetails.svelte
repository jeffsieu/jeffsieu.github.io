<div class={$$props.class} style="color: {project.textColor};">
  <div class="title-section">
    <h3 class="mdc-typography--headline4">{project.title}</h3>
    <h4 class="mdc-typography--headline5">{project.subtitle}</h4>
  </div>
  <p class="mdc-typography--headline6">{project.description}</p>
  <div class="project-action">
    <ProjectAction class="project-actions" project={project}/>
  </div>
</div>

<script lang="ts">
  import ProjectAction from "$lib/ProjectAction.svelte";
  import type { Project } from "$lib/types";

  export let project: Project;
</script>

<style>
  :global(.project-action) {
    margin-block-start: 1rem;
  }

  .title-section {
    margin-block-end: 1rem;
  }
</style>