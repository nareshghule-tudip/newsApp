import React from 'react';
import {View} from 'react-native';
import Styles from './Styles';

const Container = props => (
  <View style={Styles.container}>{props.children}</View>
);

export default Container;
