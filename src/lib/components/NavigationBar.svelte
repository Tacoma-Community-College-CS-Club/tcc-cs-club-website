<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/tcc_grayscale.svg';
	import menu_icon from '$lib/images/mobile_menu.svg';

	import day_icon from '$lib/images/day.svg';
	import night_icon from '$lib/images/night.svg';
</script>

<nav>
	<img src={logo} alt="Club logo">
	<ul>
		<!-- Only the href changes the link; aria-current is for accessibility/cosmetic current page indicators -->
		<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
			<a href="/">Home</a>
		</li>
		<li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
			<a href="/projects">Projects</a>
		</li>
		<li aria-current={$page.url.pathname === '/schedule' ? 'page' : undefined}>
			<a href="/schedule">Schedule</a>
		</li>
		<li aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined}>
			<a href="/contact">Contact</a>
		</li>
	</ul>
	<img src={menu_icon} class="menu-icon">
</nav>

<style>
	header {
		display: flex;
		justify-content: center;
	}
	
	nav {
		display: flex;
		justify-content: left;
		width: 100%;
		height: 3.5em;
		background: var(--color-gradient-default);
		border-bottom: 1px solid #282828;
	}

	img {
		width: 2.5em;
		height: 2.5em;
		margin-left: 1em;
		margin-right: 1em;
		display: flex;
		align-self: center;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
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

	/* Color the current item with the theme color. */
	li[aria-current='page'] a { 
		color: var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 1rem;
		font-family: "DM Sans";
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.1s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	.menu-icon {
		display: none;
		cursor: pointer;
	}

	/* Mobile styling, when under a certain viewport width. */
	/* Playing with the values */
	@media screen and (max-width: 768px) {
		.menu-icon {
			display: block;
			cursor: pointer;
		}
		nav {
			height: 4.5em
		}
		/* Hide navbar elements in mobile */
		ul {
			display: none;
		}
	}
</style>
