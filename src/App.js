import React from 'react';
import PropTypes from 'prop-types';

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Import Routes all
import { userRoutes } from './routes/allRoutes';

// Import all middleware
import Authmiddleware from './routes/middleware/Authmiddleware';

// layouts Format
import VerticalLayout from './components/VerticalLayout';
import HorizontalLayout from './components/HorizontalLayout';
import NonAuthLayout from './components/NonAuthLayout';

// Import scss
import './assets/scss/theme.scss';

// Import Firebase Configuration file
// import { initFirebaseBackend } from './helpers/firebase_helper';

// import fakeBackend from './helpers/AuthType/fakeBackend';

// Activating fake backend
// fakeBackend();

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASEURL,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENTID,
// };

// init firebase backend
// initFirebaseBackend(firebaseConfig);

const App = ({ layout }) => {
  function getLayout() {
    let layoutCls = VerticalLayout;

    switch (layout.layoutType) {
      case 'horizontal':
        layoutCls = HorizontalLayout;
        break;
      default:
        layoutCls = VerticalLayout;
        break;
    }
    return layoutCls;
  }

  const Layout = getLayout();

  const NonAuthmiddleware = ({ component: Component }) => (
    <Route
      render={(props) => (
        <NonAuthLayout>
          <Component {...props} />
        </NonAuthLayout>
      )}
    />
  );

  NonAuthmiddleware.propTypes = {
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
      .isRequired,
  };

  return (
    <Router>
      <Switch>
        {/* {authRoutes.map((route, idx) => (
          <NonAuthmiddleware
            path={route.path}
            layout={NonAuthLayout}
            component={route.component}
            key={idx}
          />
        ))} */}
        {userRoutes.map((route, idx) => (
          <Authmiddleware
            path={route.path}
            layout={Layout}
            component={route.component}
            key={idx}
          />
        ))}
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  layout: state.Layout,
});

App.propTypes = {
  layout: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(App);
