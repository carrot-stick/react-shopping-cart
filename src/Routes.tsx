import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

interface Module {
  [modulePath: string]: { default: string };
}

const ROUTES: Module = import.meta.glob('/src/pages/**/[a-z[]*.tsx', {
  eager: true,
});

const routes = Object.keys(ROUTES).map((route) => {
  const path = route
    .replace(/\/src\/pages|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1');

  return { path, component: ROUTES[route].default };
});

const Router = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ path, component: Component = Fragment }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  </BrowserRouter>
);
export default Router;
