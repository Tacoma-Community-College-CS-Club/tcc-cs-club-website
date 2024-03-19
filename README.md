# Welcome to the TCC CS Club website source!
This repo hosts all of the source code for the CS club website.

## About
This website is built using Svelte, which is a free and open source component-based front end framework.
Svelte uses vanilla HTML/CSS/JavaScript/TypeScript, so the code should be easy to maintain.

[Svelte](https://svelte.dev/docs/introduction) and [SvelteKit](https://kit.svelte.dev/docs/introduction) documentation is available online.

## Building/working on the website on your machine
To build the website locally, you will need Node.js and Git installed on your machine.
You can install Node.js from the [website](https://nodejs.org/en/download).

Once installed, you will want to copy the files from GitHub to your machine to work with.
Clone the repo with `git clone` in a directory of your choice:
```bash
git clone https://github.com/Tacoma-Community-College-CS-Club/tcc-cs-club-website.git
cd tcc-cs-club-website
```

Then run `npm run dev` to start a local server and test the website:
```bash
npm run dev

# or open it automatically in a new browser tab
npm run dev -- --open
```

## Creating a production build
To build a production version of the website for deployment:
```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
