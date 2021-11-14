# [jahir.dev](https://jahir.dev)

## Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Content**: [MDX](https://github.com/mdx-js/mdx) and [contentlayer](https://github.com/contentlayerdev/contentlayer)
- **Styling**: [emotion.sh](http://emotion.sh/), [Tailwind CSS](https://tailwindcss.com/) and [twin.macro](https://github.com/ben-rogerson/twin.macro)
- **Deployment**: [Vercel](https://vercel.com)

## Project Structure

```bash
.
|____data
|____public
|____src
| |____styles
| |____components
| | |____atoms
| | |____elements
| | |____blocks
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

- **`data/*`** - MDX blog posts, inspiration items (generated)
- **`public/*`** - Static assets including images, fonts, audios and files
- **`src/styles/*`** - Some global styles. Built using tailwind classes
- **`src/components/atoms/*`** - The simplest components. Most of them are stateless
- **`src/components/elements/*`** - Slightly more complex components. Some use or extend atoms
- **`src/components/blocks/*`** - The main blocks for the website: `metatags`, `toolbar`, `footer` and `content`
- **`src/components/sections/*`** - The different sections or pages of my website. _(They're here to keep `src/pages/` as clean as possible)_
- **`src/components/mdx/*`** - Components built specifically for MDX content
- **`src/hooks/*`** - A couple hooks used throughout the app
- **`src/providers/*`** - Just a wrapper for accessing current theme
- **`src/pages/api/*`** - [API routes](https://nextjs.org/docs/api-routes/introduction) powering [`/dashboard`](https://jahir.dev/dashboard), and a page to download github releases assets
- **`src/pages/blog/*`** - Static pre-rendered blog pages using MDX
- **`src/pages/*`** - All other static pages
- **`src/lib/*`** - Short for "library", a collection of helpful utilities or code for external services
- **`src/utils/*`** - Almost the same as `lib` just with code built to be used in components
- **`src/tailwind/*`** - Setup for different tailwind components and classes

_Project partially based on [Lee Rob's website](https://github.com/leerob/leerob.io/)_

## Running Locally

```bash
git clone https://github.com/jahirfiquitiva/jahir.dev.git
cd jahir.dev
yarn
```

Create a `.env` file similar to [`.env.example`](https://github.com/jahirfiquitiva/jahir.dev/blob/main/.env.example).

```bash
yarn dev
```

## Previous versions

All the previous versions of this website can be found at [jahirfiquitiva/prev-websites](https://github.com/jahirfiquitiva/prev-websites)
