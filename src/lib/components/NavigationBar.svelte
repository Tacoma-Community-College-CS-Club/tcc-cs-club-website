<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/tcc_grayscale.svg';

	import day_icon from '$lib/images/day.svg';
	import night_icon from '$lib/images/night.svg';
</script>

<nav>
	<ul>
		<!-- Only the href changes the link; aria-current is for accessibility/cosmetic current page indicators -->
		<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
			<a href="/">Home</a>
		</li>
		<li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
			<a href="/projects">Projects</a>
		</li>
		<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
			<a href="/about">Schedule</a>
		</li>
		<li aria-current={$page.url.pathname.startsWith('/blog') ? 'page' : undefined}>
			<a href="/blog">Test</a>
		</li>
	</ul>
</nav>

<style>
	@media screen and (max-width: 768px) {
		nav a {
			font-size: 2vw; /* Adjust as needed */
		}
	}	

	header {
		/* display: flex; */
		/* justify-content: center; */
	}

	.corner {
		width: 2em;
		height: 2em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}
	
	nav {
		/* display: flex; */
		/* justify-content: center; */
		width: 100%;
		--background: rgba(10, 10, 10, 0.5);
	}

	svg {
		width: 1em;
		height: 1em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text-dark);
		font-weight: 700;
		font-size: 0.8rem;
		font-family: "DM Sans";
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
