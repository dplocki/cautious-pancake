# 🥞 Cautious Pancake

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Docker run

Build the image:

```sh
docker build -t cautious-pancake .
```

Run it

```sh
docker run -it -v $(pwd):/usr/src/app -v /usr/src/app/node_modules --rm cautious-pancake
```
