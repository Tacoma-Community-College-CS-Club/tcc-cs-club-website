<!-- This card is for the front page only, it will contain a large featured preview for a project/etc -->

<script>
	import landing_image from "$lib/images/svelte-welcome.png";
</script>

<div class="card-body">
	<div class="card-image">
		<img src={landing_image} />
	</div>
</div>

<style>
	.card-body {
		width: 85%;
		height: 20em;
		border: solid;
		border-width: 1px;
		border-radius: 1em;
		border-color: var(--color-border);
		margin: 1em;
	}

	@media screen and (max-width: 768px) {
		.card-body {
			width: 100%;
			padding: 0px;
			margin: 0px;
		}
		.card-image {
			padding: 0;
			margin: 0;
		}
	}
</style>
