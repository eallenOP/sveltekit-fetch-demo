<script>
    // The data prop brings anything you fetched in the load function in here for use on the page
    export let data;
    console.log(data); // You can see the data in the console using the browser's dev tools
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h2>Fetch!</h2>
<p>Here's a random dog image from <a href="https://dog.ceo/dog-api/">dog.ceo</a>:</p>

<!-- We're using the fetched data in our image tag's src attribute -->
<img src={data.dog.message} alt="Random dog">