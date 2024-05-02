<script>
	import Header from '$lib/components/Header.svelte';
	import NavigationBar from '$lib/components/NavigationBar.svelte';
	import './styles.css';
  	import "../app.css";
</script>

<div class="app">
	<Header />
	<NavigationBar />

	<main>
		<slot />
	</main>

	<footer>
		<p>This website is <b>NOT</b> affiliated with Tacoma Community College. The logo is used for pre-production descriptive purposes.</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		align-items: center;
		padding: 20px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
