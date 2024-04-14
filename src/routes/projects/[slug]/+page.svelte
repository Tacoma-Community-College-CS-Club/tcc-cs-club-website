<!-- This is the dynamic layout for project landing pages. -->

<script>
    export let data;
</script>

<svelte:head>
    <title>View project - TCC CS Club</title>
    <meta name="description" content="View club projects and events"/>
</svelte:head>

<h1>{data.title}</h1>
<div>{@html data.content}</div>

<style>
    h1 {
        font-family: "DM Sans";
        font-weight: bold;
        font-size: 2.2em;
    }
</style>