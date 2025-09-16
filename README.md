# Mindy instructions:
1. Clone this repo: `gh repo clone mindalynworld/svelte-project-template`
2. Initialize git in your local folder `git init` 
3. Create a new repo in github browser 
4. Add this new repo url as a remote to your local repo `git remote add origin https://github.com/mindalynworld/chef_mindalyn.git`
5. git add, git commit, git push -u origin main

1. Install dependencies: `npm install`
2. Run development mode for the project `npm run dev`

# svetle project instructions

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
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

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
