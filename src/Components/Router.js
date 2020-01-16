import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Auth from '../Routes/Auth';
import Feed from '../Routes/Feed';
import Alarm from '../Routes/Alarm';
import Story from '../Routes/Story';
import Etc from '../Routes/Etc';
import Me from '../Routes/Me';
import Search from '../Routes/Search';
import Diary from '../Routes/Diary';
import Theme from '../Routes/Theme';
import App from './App';

const LoggedInRoutes = () => {
  console.log('loggedin');
  return (
    <Router>
      <Route path={'/feed'} component={Feed} />
      <Route path={'/search'} component={Search} />
      <Route path={'/diary'} component={Diary} />
      <Route path={'/alarm'} component={Alarm} />
      <Route path={'/story'} component={Story} />
      <Route path={'/me'} component={Me} />
      <Route path={'/etc'} component={Etc} />
      <Route path={'/auth'} component={Auth} />
      <Route path={'/theme'} component={Theme} />
      <Route path={'/app'} component={App} />
      <Redirect from={'*'} to={'/feed'} />
    </Router>
  );
};

const LoggedOutRoutes = () => {
  console.log('loggedOut');
  return (
    <Router>
      <Route path={'/auth'} component={Auth} />
      <Route path={'/theme'} component={Theme} />
      <Redirect from={'*'} to={'/auth'} />
    </Router>
  );
};

const AppRouter = ({ isLoggedIn }) => {
  console.log('router');
  return (
    <Router>
      <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
    </Router>
  );
};

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
