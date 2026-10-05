# afiaava

My personal website that I try to update often...

Live at [afiaava.com](https://afiaava.com).

## Pages

| Page | Path | What's there |
| --- | --- | --- |
| about | `/` (also `/about`) | About me of course, links to my socials, and some of my projects |
| thoughts | `/thoughts` | Essays I've written (hopefully real essays soon) |
| archive | `/archive` | Interesting and inspiring pieces I've come across |
| things about stuff | `/things-about-stuff` | Bunch of pictures of bunch of experiences |

There's a light and dark mode toggle in the navbar. 

## Built with

- [Next.js](https://nextjs.org) 15 (App Router) and React 19
- [Tailwind CSS](https://tailwindcss.com) 4
- TypeScript



## Website Navigation

```
src/
  app/
    page.tsx                  about page and project list
    thoughts/page.tsx         list of essays
    thoughts/<slug>/page.tsx  one page per essay
    archive/page.tsx          archive list
    things-about-stuff/       things about stuff page
    layout.tsx                fonts, metadata, analytics
  components/
    FooterScene.tsx           illustrated footer
    useTheme.ts               shared light/dark mode setting
public/
  projects/                   project images
```

## Running it locally

You'll need Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # lint the code
```


## Contact

hi [at] afiaava [dot] com
