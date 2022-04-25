import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Styles from './Styles';
const Button = props => {
  const {style, labelStyle} = props;
  return (
    <TouchableOpacity style={[Styles.button, style]} {...props}>
      <Text style={[Styles.buttonLabel, labelStyle]} {...props}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
