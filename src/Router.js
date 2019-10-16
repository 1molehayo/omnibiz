import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loader } from './components';
import history from './history';

const Home = lazy(() => import('pages/Home'));
const Themes = lazy(() => import('pages/Themes'));

const Scroll = props => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location]);

  return props.children;
};

Scroll.propTypes = {
  location: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

const ScrollToTop = withRouter(Scroll);

const RouterComponent = () => (
  <Router history={history}>
    <ScrollToTop>
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => (
            <Suspense fallback={<Loader show />}>
              <Home {...routeProps} />
            </Suspense>
          )}
        />

        <Route
          exact
          path="/themes"
          render={routeProps => (
            <Suspense fallback={<Loader show />}>
              <Themes {...routeProps} />
            </Suspense>
          )}
        />
      </Switch>
    </ScrollToTop>
  </Router>
);

export default RouterComponent;
