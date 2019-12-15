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
import Diary from '../Routes/Diary';
import Alarm from '../Routes/Alarm';
import Board from '../Routes/Board';
import Etc from '../Routes/Etc';
import Me from '../Routes/Me';
import Header from './Header';
import Tab from './Tab';
const LoggedInRoutes = () => {
  return (
    <>
      <Router>
        <Header />
        <Tab />
        <Route path={'/'} exact={true} component={Feed} />
        <Route path={'/feed'} component={Feed} />
        <Route path={'/diary'} component={Diary} />
        <Route path={'/alarm'} component={Alarm} />
        <Route path={'/board'} component={Board} />
        <Route path={'/me'} component={Me} />
        <Route path={'/etc'} component={Etc} />
        <Redirect from={'*'} to={'/'} />
      </Router>
    </>
  );
};

const LoggedOutRoutes = () => (
  <>
    <Route exact path="/" component={Auth} />
  </>
);

const AppRouter = ({ isLoggedIn }) => {
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
