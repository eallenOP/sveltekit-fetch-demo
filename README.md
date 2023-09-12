# Fetch from a REST API in SvelteKit

This repo is a simple example of how to fetch data from a REST API using a SvelteKit app. You can use this as an example to follow when writing your own code.

The main things to note are in the [+page.svelte](https://github.com/eallenOP/sveltekit-fetch-demo/blob/main/src/routes/%2Bpage.svelte) file that gets rendered in the browser, and in the [+page.server.js](https://github.com/eallenOP/sveltekit-fetch-demo/blob/main/src/routes/%2Bpage.server.js) file that runs server-side.

Those files live side-by-side in the [/src/routes/](https://github.com/eallenOP/sveltekit-fetch-demo/tree/main/src/routes) directory, which means they're siblings and can communicate together in special SvelteKit ways.

You basically do the fetch part on the server and pass the resulting data to the page to display it.

---

Original README:

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
