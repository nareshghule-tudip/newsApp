import React from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';
const RenderImage = props => {
  const {imageUri, imageStyle, isRemoteImage} = props;
  return (
    <Image
      source={isRemoteImage ? {uri: imageUri} : imageUri}
      style={imageStyle}
    />
  );
};

RenderImage.propTypes = {
  imageUri: PropTypes.any.isRequired,
  imageStyle: PropTypes.object.isRequired,
};
RenderImage.defaultProps = {
  isRemoteImage: true,
};

export default RenderImage;
