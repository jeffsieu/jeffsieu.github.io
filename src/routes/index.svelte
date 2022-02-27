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

<header>
  <article>
    <section class="centered">
      <div>
        <div class="mdc-typography--headline2">Hi, I'm Jeff Sieu!</div>
        <div class="mdc-typography--headline4" style="margin-top: 1rem">Here, I showcase some of the things I have made/done.</div>
      </div>
    </section>
  </article>
</header>
<article id="featuredProjects">
  <section class="centered thin">
    <div>
      <div class="mdc-typography--headline2">My projects</div>
    </div>
  </section>
  <div class="project-list">
    {#each featuredProjects as project}
      <section style="background-color: {project.backgroundColor}" class="project-section centered">
        <div>
          <div class="project-image">
            <img alt={project.title} src="{project.image}">
          </div>
          <div class="project-details">
            <div class="title-section" style="color: {project.textColor};">
              <div class="mdc-typography--headline3">{project.title}</div>
              <div class="mdc-typography--headline5">{project.subtitle}</div>
            </div>
            <div class="mdc-typography--headline6">{project.description}</div>
            <div class="project-action">
              <ProjectAction project={project}/>
            </div>
          </div>
        </div>
      </section>
    {/each}
  </div>
</article>
<article id="skills">
  <section class="centered">
    <div>
      <div class="mdc-typography--headline2">Skills</div>
      <ul style="padding-top: 2rem">
        {#each skills as skill}
          <li><div class="mdc-typography--headline4">{skill}</div></li>
        {/each}
      </ul>
    </div>
  </section>
</article>
<article id="otherProjects" style="background: #F2F2F2">
  <section class="centered">
    <div class="mdc-typography--headline2">Other projects I've worked on</div>
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
            <div class="project-action">
              <ProjectAction project={project}/>
            </div>
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

  li {
    margin-inline-start: 1.5rem;
  }

  .project-image {
    flex: 2;
    max-width: 24rem;
  }

  .project-image img {
    width: 100%;
    object-fit: contain;
    border-radius: 1rem;
  }

  .project-details {
    flex: 3;
  }

  .project-action {
    margin-block-start: 1rem;
  }

  section {
    padding: 2rem;
  }

  section.thin > * {
    padding-block: 3rem;
  }

  section > * {
    padding-block: 6rem;  
  }

  section.centered {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  section.centered > * {
    max-width: 1200px;
    flex: 1;
  }

  .project-section > div {
    display: flex;
    gap: 4rem;
  }

  #otherProjects .project-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(max(33%, 30em), 60em), 1fr));
  }

  @media (max-width: 750px) {
    .project-section > * {
      flex-direction: column;
      padding-block: 2rem;
    }

    .project-image {
      max-width: max-content;
    }
  }

  @media (min-width: 751px) {
    .project-section:nth-child(2n) > * {
      flex-direction: row-reverse;
    }
  }

  .project-section .title-section {
    margin-block-end: 2rem;
  }

</style>

<script lang="ts">
  import ProjectAction from "$lib/ProjectAction.svelte";
  import type {Project, FeaturedProject} from "$lib/project";


  const featuredProjects: FeaturedProject[] = [
    {
      title: 'Stops',
      subtitle: 'Flutter',
      description: 'A live bus timing app for buses in Singapore. Available on Google Play.',
      image: 'images/stops.png',
      viewLink: 'https://play.google.com/store/apps/details?id=com.jeffsieu.stops',
      githubLink: 'https://github.com/jeffsieu/stops',
      backgroundColor: '#E9F5F7',
      textColor: '#3E3E3E',
    },
    {
      title: 'Blocked',
      subtitle: 'Flutter',
      description: 'You control a block. Knock into others to transfer control. Escape with the main block.',
      image: 'images/blocked.png',
      demoLink: 'https://slide.jeffsieu.com',
      githubLink: 'https://github.com/jeffsieu/slide',
      backgroundColor: '#C2DFE2',
      textColor: '#28211A',
    },
    {
      title: 'Quards',
      subtitle: 'Flutter',
      description: 'Solitaire written in Flutter.',
      image: 'images/quards.png',
      demoLink: 'https://quards.jeffsieu.com',
      githubLink: 'https://github.com/jeffsieu/quards',
      backgroundColor: '#F6FFF6',
      textColor: '#2B3237',
    },
    {
      title: 'another typing test',
      subtitle: 'Flutter',
      description: 'Test your typing speed with this typing test.',
      image: 'images/another_typing_test.png',
      demoLink: 'https://type.jeffsieu.com',
      githubLink: 'https://github.com/jeffsieu/type',
      backgroundColor: '#FFE0A6',
      textColor: '#27127B',
    },
  ];

  const otherProjects: Project[] = [
    {
      title: 'NUS Computing Club Website',
      subtitle: 'React with Gatsby',
      description: 'The website for NUS Students\' Computing Club. Made while I was the IT Secretary there.',
      viewLink: 'https://nuscomputing.jeffsieu.com',
      githubLink: 'https://github.com/jeffsieu/nuscomputing',
      backgroundColor: '#28378F',
      textColor: '#EFEFEF',
    },
    {
      title: 'MIPS Converter',
      subtitle: 'Svelte with Typescript',
      description: 'Converts MIPS instructions to and from hex/binary.',
      demoLink: 'https://mips-converter.jeffsieu.com',
      githubLink: 'https://github.com/jeffsieu/mips-converter',
      backgroundColor: '#EFEFEF',
      textColor: '#2E394D',
    },
    {
      title: 'py-sudoku',
      subtitle: 'Python',
      description: 'A python package that solves sudoku puzzles.',
      viewLink: 'https://pypi.org/project/py-sudoku/',
      githubLink: 'https://github.com/jeffsieu/py-sudoku',
      backgroundColor: '#006DAD',
      textColor: '#FFDF76',
    },
    {
      title: 'txthlpr',
      subtitle: 'React with Typescript',
      description: 'Perform repetitive formatting tasks on text without the pain of repetition.',
      demoLink: 'https://txthlpr.jeffsieu.com',
      githubLink: 'https://github.com/jeffsieu/txthlpr',
      backgroundColor: '#201B2D',
      textColor: '#FFDF76',
    },
    {
      title: 'monke',
      subtitle: 'Windows Forms',
      description: 'Add mechanical key switch noises to your boring membrane keyboard. Done for fun as a hackathon submission to Hack&Roll 2022.',
      viewLink: 'https://devpost.com/software/monke-jbdg0v',
      githubLink: 'https://github.com/jeffsieu/monke',
      backgroundColor: '#EEBED3',
      textColor: '#541F38',
    },
    {
      title: 'sprintf',
      subtitle: 'p5.js',
      description: 'An accessibility-first efficient input alternative. Created for NUSH Hack.',
      viewLink: 'https://devpost.com/software/4-way-keyboard',
      demoLink: 'https://orppra.github.io/sprintf',
      githubLink: 'https://github.com/orppra/sprintf',
      backgroundColor: '#d4cef5',
      textColor: '#082602',
    },
    {
      title: 'NUSMods Timetabler',
      subtitle: 'React',
      description: 'Generate timetables for modules in National University of Singapore. Created for Hack&Roll 2021.',
      viewLink: 'https://devpost.com/software/time-tabler',
      githubLink: 'https://github.com/jeffsieu/timetabler',
      backgroundColor: '#FF9485',
      textColor: '#222324',
    },
    {
      title: 'Ping Pong Warz',
      subtitle: 'three.js',
      description: 'Use your phone as a controller to play ping pong on your machine. Created for iNTUition v5.0.',
      viewLink: 'https://devpost.com/software/ping-pong-warz',
      githubLink: 'https://github.com/Enigmatrix/ping-pong-warz',
      backgroundColor: '#CEF5DD',
      textColor: '#0A3002',
    },
  ];

  const skills = [
    'Android SDK',
    'Flutter development',
    'Web with React',
    'Python',
    'pandas',
    'Java',
    'JavaScript',
  ];
</script>