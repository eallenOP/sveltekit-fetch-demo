<script>
    // The data prop brings anything you fetched in the load function in here for use on the page
    export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<img src={data.dog.message} alt="Random dog">