import React from 'react';
import {TextInput} from 'react-native';
import Styles from './Styles';

const Input = props => {
  const {placeholder, inputRef, handleChangeText, inputValue} = props;
  return (
    <TextInput
      underlineColorAndroid="transparent"
      spellCheck={false}
      autoCorrect={false}
      autoCapitalize="none"
      placeholderTextColor="#072D4B"
      blurOnSubmit={false}
      ref={inputRef}
      returnKeyType="next"
      placeholder={placeholder}
      onChangeText={handleChangeText}
      value={inputValue}
      style={Styles.inputStyle}
      {...props}
    />
  );
};

export default Input;
