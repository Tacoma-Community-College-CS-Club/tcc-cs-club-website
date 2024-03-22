<script>
    export let src; // Image source prop
    export let alt; // Image alt text prop
</script>

<div class="picture-body">
    <img src={src} alt="A profile picture">
</div>

<style>
    .picture-body {
        margin: 10px;
        width: 150px;
        height: 150px;
        border-radius: 200px;
        /* background-color: black; */
    }
</style>