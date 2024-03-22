<script>
    export let name = "Default Name"; // First, last name for initials if image is unavailable or cannot be loaded
    export let src; // Image source prop
    export let alt; // Image alt text prop
</script>

<div class="picture-body">
    <img src={src} alt="A profile picture" class="inner-picture">
</div>

<style>
    .picture-body {
        margin: 10px;
        width: 8em;
        height: 8em;
    }

    .inner-picture {
        border-radius: 50%;
    }
</style>