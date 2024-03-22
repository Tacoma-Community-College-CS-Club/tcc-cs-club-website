<script>
    import ProfilePicture from "$lib/components/ProfilePicture.svelte";
    import test_profile_picture from '$lib/images/profile_pictures/testpic.webp';
</script>

<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app" />
</svelte:head>

<div class="container">
    <div class="contact-container">
        <div class="profile-picture">
            <ProfilePicture src={test_profile_picture}/>
        </div>
        <ul class="contact-info">
            <li><strong>John Smith</strong></li>
            <li><i>Club President</i></li>
        </ul>
    </div>

    <div class="contact-container">
        <div class="profile-picture">
            <ProfilePicture src={test_profile_picture}/>
        </div>
        <ul class="contact-info">
            <li><strong>John Smith</strong></li>
            <li><i>Vice President</i></li>
        </ul>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column; /* Stack items vertically */
        justify-content: top; /* Horizontally center contents */
        align-items: center; /* Vertically center contents */
        height: 100vh; /* Set height to full viewport height */
    }

    .contact-container {
        display: flex;
        align-items: center; /* Vertically align items */
        margin-bottom: 20px; /* Adjust spacing between contact containers */
    }

    .profile-picture {
        margin-right: 10px; /* Adjust spacing between profile picture and info */
    }
</style>
