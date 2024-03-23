<script lang="ts">
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

	// Project card:
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<svelte:head>
	<title>Home - TCC CS Club</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="text-3xl font-bold">
		Welcome
	</h1>

	<div class="grid-container">
		<div class="grid-item"><ProjectCard/></div>
		<div class="grid-item"><ProjectCard/></div>
		<div class="grid-item"><ProjectCard/></div>
		<div class="grid-item"><ProjectCard/></div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: top;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	.grid-item {
  		grid-column: 1 / 3;
  		grid-row: 1;
	}
</style>
