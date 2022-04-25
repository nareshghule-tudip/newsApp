import React from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';
import icons from '../utility/icons';
import Styles from './Styles';
import SelectDropdown from 'react-native-select-dropdown';

/*Dropdown component */

const DropDown = props => {
  const {data, defaultValue, handleDropDownValueSelection} = props;
  return (
    <SelectDropdown
      data={data}
      defaultButtonText={defaultValue}
      buttonTextStyle={Styles.dropDownText}
      rowTextStyle={Styles.dropDownText}
      rowStyle={Styles.dropDownRow}
      renderDropdownIcon={() => {
        return (
          <Image source={icons.DROP_DOWN_ARROW} style={Styles.dropDownIcon} />
        );
      }}
      dropdownIconPosition={'right'}
      dropdownStyle={Styles.dropDownStyle}
      buttonStyle={Styles.dropDownButton}
      onSelect={(selectedItem, index) => {
        handleDropDownValueSelection(selectedItem?.countryCode);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem.name;
      }}
      rowTextForSelection={(item, index) => {
        return item.name;
      }}
    />
  );
};

DropDown.propTypes = {
  data: PropTypes.array.isRequired,
  handleDropDownValueSelection: PropTypes.func.isRequired,
};
DropDown.defaultProps = {
  data: [],
  handleDropDownValueSelection: () => null,
  defaultValue: '',
};

export default DropDown;
