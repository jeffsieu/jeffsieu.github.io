<div class={$$props.class} style="color: {project.textColor};">
  <div class="title-section">
    <h3 class="title">{project.title}</h3>
    <h4 class="subtitle">{project.subtitle}</h4>
  </div>
  <p class="description">{project.description}</p>
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
    margin-block-start: 2rem;
  }

  .title-section {
    margin-block-end: 1rem;
  }

  .title {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2rem;
  }

  .subtitle {
    font-weight: 600;
    font-size: 1.5rem;
  }
</style>