import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const NonAuthLayout = ({ location, children }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(1).toUpperCase() + string.slice(2);
  };

  useEffect(() => {
    const currentage = capitalizeFirstLetter(location.pathname);

    document.title = `${currentage} | UITM - KPI Visual`;
  }, [location.pathname]);

  return children;
};

NonAuthLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(NonAuthLayout);
