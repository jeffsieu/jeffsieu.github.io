<svelte:head>
  <title>Jeff Sieu</title>
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">

  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet">

  <!-- Material Typography -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/@material/typography@13.0.0/dist/mdc.typography.css" />

  <!-- SMUI -->
  <link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css" />

  <!-- Normalize.css -->
  <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css" />
</svelte:head>

<article>
  <section>
    <div class="mdc-typography--headline2">My projects</div>
  </section>
  <div class="project-list">
    {#each featuredProjects as project}
      <section style="background-color: {project.backgroundColor}" class="project-section">
        <div class="project-section-container">
          <div class="project-image">
            <img alt={project.title} src="{project.image}">
          </div>
          <div class="project-details">
            <div class="title-section" style="color: {project.textColor};">
              <div class="mdc-typography--headline3">{project.title}</div>
              <div class="mdc-typography--headline5">{project.subtitle}</div>
            </div>
            <div class="mdc-typography--headline6">{project.description}</div>
            <div class="project-actions">
              <button class="mdc-button mdc-button--raised mdc-button--icon-leading"
                style="--mdc-theme-primary: {project.textColor}; --mdc-theme-on-primary: {project.backgroundColor}" on:click={() => window.open(project.link)}>
                <i class="material-icons mdc-button__icon" aria-hidden="true">{project.title === 'Stops' ? 'open_in_new' : 'play_arrow'}</i>
                <span class="mdc-button__label">{project.title === 'Stops' ? 'Google Play' : 'Try it out'}</span>
              </button>
              <button class="mdc-button mdc-button--outlined mdc-button--icon-leading" style="--mdc-theme-primary: {project.textColor}" on:click={() => window.open(project.githubLink)}>
                <span class="mdc-button__ripple"></span>
                <i class="material-icons mdc-button__icon" aria-hidden="true">code</i>
                <span class="mdc-button__label">Source</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    {/each}
  </div>
</article>


<article id="otherProjects">
  <section>
    <div class="mdc-typography--headline2">Other projects</div>
  </section>
  <div class="project-list">
    {#each otherProjects as project}
      <section style="background-color: {project.backgroundColor}" class="project-section">
        <div class="project-section-container">
          <div class="project-details" style="color: {project.textColor}">
            <div class="title-section">
              <div class="mdc-typography--headline3">{project.title}</div>
              <div class="mdc-typography--headline5">{project.subtitle}</div>
            </div>
            <div class="mdc-typography--headline6">{project.description}</div>
            <button class="mdc-button mdc-button--raised mdc-button--icon-leading"
            style="--mdc-theme-primary: {project.textColor}; --mdc-theme-on-primary: {project.backgroundColor}" on:click={() => window.open(project.githubLink)}>
              <i class="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
              <span class="mdc-button__label">View</span>
            </button>
          </div>
        </div>
      </section>
    {/each}
  </div>
</article>


<style>

  :root {
    --mdc-typography-font-family: 'Josefin Sans', sans-serif;
    --mdc-theme-primary: black;
    --mdc-theme-on-primary: white;
  }

  .mdc-button--outlined {
    border-width: 2px;
    border-radius: 5px;
    color: var(--mdc-theme-primary);
  }

  .project-image {
    flex: 2;
    max-width: 24rem;
  }

  .project-image img {
    width: 100%;
    object-fit: contain;
    border-radius: 1em;
  }

  .project-details {
    flex: 3;
  }

  .project-details .mdc-button {
    margin-block-start: 1rem;
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 2rem;
  }

  section > * {
    padding-block: 6rem;  
  }

  .project-section-container {
    display: flex;
    max-width: 1200px;
    flex: 1;
    gap: 4rem;
  }

  #otherProjects .project-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(33%, 300px), 1fr));
  }

  @media (max-width: 750px) {
    .project-section-container {
      flex-direction: column;
      padding-block: 2rem;
    }

    .project-image {
      max-width: max-content;
    }
  }

  @media (min-width: 751px) {
    .project-section:nth-child(2n) .project-section-container {
      flex-direction: row-reverse;
    }
  }

  .project-section .title-section {
    margin-block-end: 2rem;
  }

  .project-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0 1em;
  }

</style>

<script lang="ts">
	type Project = {
		title: string;
		subtitle: string;
		description: string;
		link: string;
    githubLink: string,
		backgroundColor: string;
		textColor: string;
	};
	type FeaturedProject = Project & {
		image: string;
	};

  const featuredProjects: FeaturedProject[] = [
    {
      title: 'Stops',
      subtitle: 'Flutter',
      description: 'A live bus timing app for buses in Singapore. Available on Google Play.',
      image: 'images/stops.png',
      link: 'https://play.google.com/store/apps/details?id=com.jeffsieu.stops',
      githubLink: 'https://github.com/jeffsieu/stops',
      backgroundColor: '#E9F5F7',
      textColor: '#3E3E3E',
    },
    {
      title: 'Blocked',
      subtitle: 'Flutter',
      description: 'You control a block. Knock into others to transfer control. Escape with the main block.',
      image: 'images/blocked.png',
      link: 'https://slide.jeffsieu.com',
      githubLink: 'https://github.com/jeffsieu/slide',
      backgroundColor: '#C2DFE2',
      textColor: '#28211A',
    },
    {
      title: 'Quards',
      subtitle: 'Flutter',
      description: 'Solitaire written in Flutter.',
      image: 'images/quards.png',
      link: 'https://quards.jeffsieu.com',
      githubLink: 'https://github.com/jeffsieu/quards',
      backgroundColor: '#F6FFF6',
      textColor: '#2B3237',
    },
    {
      title: 'another typing test',
      subtitle: 'Flutter',
      description: 'Test your typing speed with this typing test.',
      image: 'images/another_typing_test.png',
      link: 'https://type.jeffsieu.com',
      githubLink: 'https://github.com/jeffsieu/type',
      backgroundColor: '#FFE0A6',
      textColor: '#27127B',
    },
  ];

  const otherProjects: Project[] = [
    {
      title: 'MIPS Converter',
      subtitle: 'Svelte with Typescript',
      description: 'Converts MIPS instructions to and from hex/binary.',
      link: 'https://mips-converter.jeffsieu.com',
      githubLink: 'https://github.com/jeffsieu/mips-converter',
      backgroundColor: '#3E3E3E',
      textColor: '#EFEFEF',
    },
    {
      title: 'py-sudoku',
      subtitle: 'Python',
      description: 'A python package that solves sudoku puzzles.',
      link: 'https://pypi.org/project/py-sudoku/',
      githubLink: 'https://github.com/jeffsieu/py-sudoku',
      backgroundColor: '#EFEFEF',
      textColor: '#3E3E3E',
    },
    {
      title: 'txthlpr',
      subtitle: 'React with Typescript',
      description: 'Perform repetitive formatting tasks on text without the pain of repetition. Like CyberChef but more generalized.',
      link: 'https://txthlpr.jeffsieu.com',
      githubLink: 'https://github.com/jeffsieu/txthlpr',
      backgroundColor: '#3E3E3E',
      textColor: '#EFEFEF',
    }
  ];
</script>