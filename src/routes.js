import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Actors from './pages/Actors';
import Directors from './pages/Directors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';

const routes = [
  { path: "/", component: Home, exact: true },
  { path: "/actors", component: Actors },
  { path: "/directors", component: Directors },
  { path: "/movie/:id", component: Movie },
  { path: "*", component: ErrorPage },
];

export default routes;

