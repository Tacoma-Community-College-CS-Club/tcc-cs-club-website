<script>
    import ProfilePicture from "$lib/components/ProfilePicture.svelte";
    import test_profile_picture from '$lib/images/profile_pictures/testpic.webp';
</script>

<svelte:head>
    <title>Contact - TCC CS Club</title>
    <meta name="description" content="Contact club membership"/>
</svelte:head>

<div class="container">
	<div class="contact-grid">

		<div class="contact-item">
			<div class="profile-picture">
				<ProfilePicture src={test_profile_picture}/>
			</div>
			<ul class="contact-info">
				<li><strong>John Smith</strong></li>
				<li><i>Club President</i></li>
			</ul>
		</div>

		<div class="contact-item">
			<div class="profile-picture">
				<ProfilePicture src={test_profile_picture}/>
			</div>
			<ul class="contact-info">
				<li><strong>John Smith</strong></li>
				<li><i>Vice President</i></li>
			</ul>
		</div>

	</div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: top;
        align-items: center;
        height: 100vh;
    }

	.contact-grid {
        display: grid;
        grid-template-columns: repeat(1, minmax(30px, 1fr));
        gap: 10px;
    }

    .contact-item {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
		/* flex-direction: column; */
    }

	.contact-info {
		padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
	}

	.contact-info li {
		margin-bottom: 1px;
	}

    .profile-picture {
        margin-right: 10px;
    }
</style>
