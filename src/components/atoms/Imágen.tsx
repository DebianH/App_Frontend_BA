import React from 'react';
import { Image, StyleSheet, ImageStyle, ImageSourcePropType } from 'react-native';

const Imágen: React.FC<{
  source: ImageSourcePropType;
  style?: ImageStyle;
}> = ({ source, style }) => {
  return <Image source={source} style={[styles.image, style]} />;
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    backgroundColor: '#FFFEEE'
  },
});

export default Imágen;
