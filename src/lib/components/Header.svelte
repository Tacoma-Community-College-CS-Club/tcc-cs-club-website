<!-- This component should prooobbably go away if under a certain screen width (mobile viewers) -->

<script>
    import logo from '$lib/images/tcc_grayscale.svg'
</script>

<header>
    <a href="/">
        <img src={logo} alt="TCC Logo"/>
    </a>

</header>

<style>
    header {
        width: 100%;
        height: 4em;
        background-color: rgba(10, 10, 10, 0.5);
    }

    img {
        width: 10px;
    }
</style>