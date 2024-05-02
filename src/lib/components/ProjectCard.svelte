<script>
    export let title = "Default Project"; // First, last name for initials if image is unavailable or cannot be loaded
    export let author = "John Smith";
    export let excerpt = "A student project";
    export let slug = "/";

    export let img; // Image source prop
</script>

<a class="card-body shadow-lg" href={slug}>
    <div class="card-image-container">
        <img src={img} alt="{title}" class="card-image">
    </div>
    <div class="card-text">
        <h1 class="text-lg font-bold">{title}</h1>
        <h1 class="text-lg italic">{author}</h1>
    </div>
</a>

<style>
    .card-body {
        margin: 10px;
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        min-width: 200px;
        min-height: 200px;
        border-width: 1px;
        border-color: var(--color-border);
        border-radius: 0px;
        background-color: var(--color-bg-1); /* Replace with project cover image (background-image) */

        display: flex;
        justify-content: center;
        align-items: center;

        transition: transform .2s, border-color .3s;
        transition-timing-function: ease;
    }

    .card-body:hover {
        transform: scale(1.02);
        border-color: var(--color-theme-1);
    }
    .card-image-container {
        flex: 0 0 50%;
        overflow: hidden;
        position: relative;
        object-fit: contain;
    }

    .card-image {
        width: auto;
    }

    .card-text {
        flex: 1;
    }

    a:link { 
        text-decoration: none;
    }

    a:visited { 
        text-decoration: none; 
    }

    a:hover { 
        text-decoration: none; 
    } 
    a:active { 
        text-decoration: none; 
    }

    h1 {
        margin: auto;
        color: --color-text;
        font-family: "DM Sans";
    }
</style>