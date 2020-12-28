import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Authmiddleware = ({ component: Component, layout: Layout }) => (
  <Route
    render={(props) => {
      // here you can apply condition
      // if (!localStorage.getItem('authUser')) {
      //   return (
      //     <Redirect
      //       to={{ pathname: '/login', state: { from: props.location } }}
      //     />
      //   );
      // }

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);

Authmiddleware.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  layout: PropTypes.object.isRequired,
};

export default withRouter(Authmiddleware);
