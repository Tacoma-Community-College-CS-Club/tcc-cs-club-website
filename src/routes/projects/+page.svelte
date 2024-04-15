<script>
	import ProjectCard from "$lib/components/ProjectCard.svelte";
    export let data;
</script>

<svelte:head>
    <title>Projects - TCC CS Club</title>
    <meta name="description" content="View club projects and events"/>
</svelte:head>

<div class="page-body">
    <h1 class="text-3xl font-bold">
        Featured Club Projects
    </h1>
    <p>
        This page features projects that club members have been working on!
    </p>
    <div class="projects-container">
        {#each data.pages as page}
            <div class="project-card">
            <ProjectCard title={page.title} slug="projects/{page.slug}"/>
            </div>
	    {/each}
    </div>
</div>

<style>
    h1 {
        font-weight: bold;
        font-family: "DM Sans";
        size: 2em;
    }
    .projects-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); /* Use auto-fill to create as many columns as possible with a minimum width of 300px */
        grid-template-rows: auto;
        justify-content: center;
        gap: 0em; /* Gap between project cards */
        padding: 2em;
    }

    @media screen and (max-width: 768px) {
        /* For screens smaller than 768px (mobile), switch to single column layout */
        .projects-container {
            grid-template-columns: 1fr; /* Single column */
            padding: 0;
        }
    }
</style>