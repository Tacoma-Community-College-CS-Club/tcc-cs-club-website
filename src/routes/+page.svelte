<script lang="ts">
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

	// Project card:
	import ProjectCard from '$lib/components/ProjectCard.svelte';
    import LandingCard from '$lib/components/LandingCard.svelte';
</script>

<svelte:head>
	<title>Home - TCC CS Club</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="text-3xl font-bold">
		Welcome to the TCC Computer Science Club website!
	</h1>
	<p>
		We are a group of students at Tacoma Community College building software and eating synthetic hamburgers made of Welsh beans!
	</p>

	<!-- Hold off on landing cards, we may want to put featured projects here. -->
	<!-- <LandingCard/> -->
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
		font-family: "DM Sans";
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
