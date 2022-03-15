import { Fragment } from 'react';
import {
  createRoutesFromChildren,
  matchRoutes,
  RoutesProps,
  useLocation,
} from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';

function SwipeableRoutes({ children, location }: RoutesProps) {
  location = location || useLocation();
  const routes = createRoutesFromChildren(children);
  const matches = matchRoutes(routes, location);
  const index = routes.findIndex((route) => route === matches?.[0].route);

  return (
    <SwipeableViews index={index + 1}>
      <div>No match!</div>
      {routes.map((route) => (
        <Fragment key={route.path}>{route.element}</Fragment>
      ))}
    </SwipeableViews>
  );
}

export default SwipeableRoutes;
