## Trassion React + Vite Migration

This directory contains the React + Vite + Tailwind implementation of the static Transsion Holdings Ethiopia website. All former static pages have been converted into routed React components with a shared layout, responsive mobile navigation, and enhanced UI styling.

### Stack

- Vite + React 19
- React Router v7
- Tailwind CSS

### Available Routes

| Path        | Page                            |
| ----------- | ------------------------------- |
| `/`         | Home                            |
| `/about`    | About                           |
| `/products` | Products                        |
| `/market`   | Market                          |
| `/csr`      | Corporate Social Responsibility |
| `/ims`      | IMS Policy                      |
| `/contact`  | Contact                         |

### Development

Run the dev server:

```
npm run dev
```

### Build

```
npm run build
```

### Next Steps / Ideas

- Port remaining detailed textual content from original HTML pages if any was omitted.
- Add image optimization and lazy loading hooks.
- Implement form handling for Contact (API or email service).
- Introduce dark mode toggle (Tailwind class strategy already compatible).

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
