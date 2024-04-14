<script>
	import ProjectCard from "$lib/components/ProjectCard.svelte";
    export let data;
</script>

<svelte:head>
    <title>Projects - TCC CS Club</title>
    <meta name="description" content="View club projects and events"/>
</svelte:head>

<div class="page-body">
    <h1>Projects</h1>
    <div class="projects-container">
        {#each data.pages as page}
		<!-- <a href="/projects/{page.slug}">{page.title}</a><br> -->
            <ProjectCard title={page.title} slug="projects/{page.slug}"/>
	    {/each}
    </div>
</div>

<style>
    h1 {
        font-weight: bold;
        size: 2em;
    }
    .projects-container {
        display: grid;
        /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); Two columns, each with a minimum width of 300px */
        grid-template-columns: 400px 400px 100px;
        grid-template-rows: auto;
        
        justify-content: center;
        gap: 4em; /* Gap between project cards */
    }

    @media screen and (max-width: 768px) {
        /* For screens smaller than 768px (mobile), switch to single column layout */
        .projects-container {
            grid-template-columns: 1fr; /* Single column */
        }
    }
</style>