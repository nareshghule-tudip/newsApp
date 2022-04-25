import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import colorConstant from '../utility/colorConstant';
import Styles from './Styles';

/* Activity Loader component for iOS and android */
const Spinner = props => {
  const {color, isVisible} = props;
  return isVisible ? (
    <ActivityIndicator
      animating={isVisible}
      style={Styles.spinner}
      size="large"
      color={color}
    />
  ) : null;
};

Spinner.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};
Spinner.defaultProps = {
  isVisible: false,
  color: colorConstant.BLACK_COLOR,
};

export default Spinner;
