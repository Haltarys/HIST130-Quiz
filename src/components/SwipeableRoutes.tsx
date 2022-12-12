import { Fragment } from 'react';
import {
  createRoutesFromChildren,
  matchRoutes,
  RoutesProps,
  useLocation,
} from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';

// Ugly re-implementation of react-swipeable-routes since it doesn't support React Router v6 (yet, at least)
function SwipeableRoutes({ children, location }: RoutesProps) {
  location = location || useLocation();
  const routes = createRoutesFromChildren(children);
  const matches = matchRoutes(routes, location);
  const index = routes.findIndex((route) => route === matches?.[0].route);

  return (
    <SwipeableViews index={index + 1}>
      <div>No match!</div>
      {routes.map((route) => (
        // <>...</> syntax doesn't seem to work with attributes
        <Fragment key={route.path}>{route.element}</Fragment>
      ))}
    </SwipeableViews>
  );
}

export default SwipeableRoutes;
