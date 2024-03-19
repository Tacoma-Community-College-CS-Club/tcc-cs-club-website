<script>

</script>

<!-- Rob: I'm using Tailwind here to add a shadow using the "shadow-lg" property. -->
<div class="card-body shadow-lg">
    <h1 class="font-bold text-3xl">Example Project</h1>
</div>

<style>
    .card-body {
        margin: 10px;
        width: 450px;
        height: 250px;
        border-width: 2px;
        border-color: #a39a9a;
        border-radius: 20px;
        background-image: --color-basic-gradient;
    }

    .card-body[data-theme="dark"] {
        margin: 10px;
        width: 450px;
        height: 250px;
        border-width: 2px;
        border-color: #a39a9a;
        border-radius: 20px;
        background-image: --color-basic-gradient;
    }

    h1 {
        margin: auto;
        color: --color-text;
        font-family: "Inter";
    }
</style>