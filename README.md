# [jahir.dev](https://jahir.dev)

## Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://github.com/mdx-js/mdx) and [contentlayer](https://github.com/contentlayerdev/contentlayer)
- **Database**: [PlanetScale](https://planetscale.com/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Deployment**: [Vercel](https://vercel.com)

## Project Structure

```bash
.
|____content
|____public
|____src
| |____icons
| |____styles
| |____components
| | |____atoms
| | |____compounds
| | |____molecules
| | |____sections
| | |____mdx
| |____hooks
| |____providers
| |____pages
| | |____api
| | |____blog
| |____lib
| |____utils
| |____types
|____scripts
|____tailwind
```

- **`content/*`** - MDX blog posts and projects
- **`public/*`** - Static assets including images, fonts, audios and files
- **`src/icons/*`** - Custom SVG icon paths. Mostly based on [Lucide](https://lucide.dev/)
- **`src/styles/*`** - Some global styles. Built using tailwind classes
- **`src/components/atoms/*`** - The simplest components. Most of them are stateless
- **`src/components/compounds/*`** - Slightly more complex components. Some use or extend atoms
- **`src/components/molecules/*`** - The main blocks for the website: `metatags`, `toolbar`, `footer` and `Layout`
- **`src/components/sections/*`** - The different sections or pages of my website. _(They're here to keep `src/pages/` as clean as possible)_
- **`src/components/mdx/*`** - Components built specifically for MDX content
- **`src/hooks/*`** - A couple hooks used throughout the app
- **`src/providers/*`** - React Contexts for different purposes such as: current theme, blog post reactions, sponsors data.
- **`src/pages/api/*`** - [API routes](https://nextjs.org/docs/api-routes/introduction) powering [`/dashboard`](https://jahir.dev/dashboard), blog post reactions and views, and a page to download github releases assets
- **`src/pages/blog/*`** - Static pre-rendered blog pages using MDX
- **`src/pages/projects/*`** - Static pre-rendered projects pages using MDX
- **`src/pages/*`** - All other static pages
- **`src/lib/*`** - Short for "library", a collection of helpful utilities or code for external services
- **`src/utils/*`** - Almost the same as `lib` just with code built to be used in components
- **`src/stitches/*`** - Setup for stitches themes including colors, spaces, fonts and more

## Running Locally

This application requires Node.js v16.20+.

```bash
git clone https://github.com/jahirfiquitiva/jahir.dev.git
cd jahir.dev
yarn
yarn setup # Remove all of my personal content and files
```

Create a `.env` file similar to [`.env.example`](https://github.com/jahirfiquitiva/jahir.dev/blob/main/.env.example).

```bash
yarn dev
```

## Cloning / Forking

Please review the [license](https://github.com/jahirfiquitiva/jahir.dev/blob/main/LICENSE), do not copy it directly, remove all of my personal content and files (resume, blog posts, images, etc.) by running `yarn setup` and please change the styling and colors to match your personal brand. You are free to use this code as inspiration or learning reference but this is not really intended to be a template.

<details>

<summary>Additional changes</summary>

Make sure to set the `IS_TEMPLATE` environment variable to false.
Otherwise, the colors in the website might be inverted. (See `src/styles/globals.scss`)

</details>

## Previous versions

All the previous versions of this website can be found at [jahirfiquitiva/prev-websites](https://github.com/jahirfiquitiva/prev-websites)
