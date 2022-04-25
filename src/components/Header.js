import React from 'react';
import {Text, View} from 'react-native';
import icons from '../utility/icons';
import Styles from './Styles';
import constant from '../utility/constant';

import {RenderImage} from './index';
const Header = () => {
  const {HEADER_COMPONENT} = constant;
  return (
    <View style={Styles.headerParent}>
      <View style={Styles.header}>
        <View style={Styles.headerMenuAndInstepLogoContainer}>
          <RenderImage
            imageUri={icons.HEADER_MENU}
            isRemoteImage={false}
            imageStyle={Styles.menuImage}
          />
          <View style={Styles.inStepLogoView}>
            <RenderImage
              imageUri={icons.IN_STEP_LOGO}
              isRemoteImage={false}
              imageStyle={Styles.inStepLogo}
            />
          </View>
        </View>
        <View style={Styles.searchProfileIconContainer}>
          <RenderImage
            imageUri={icons.SEARCH}
            isRemoteImage={false}
            imageStyle={Styles.search}
          />
          <RenderImage
            imageUri={icons.PROFILE}
            isRemoteImage={false}
            imageStyle={Styles.profileImage}
          />
          <View style={Styles.myProfileView}>
            <Text style={Styles.profile}>{HEADER_COMPONENT.MY_PROFILE}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
