// src/components/atoms/Icon.tsx
import React from 'react';
import { Image, ImageProps, StyleSheet } from 'react-native';

interface IconProps extends ImageProps {}

const IconHomeScreen: React.FC<IconProps> = ({ style, ...props }) => (
  <Image style={[styles.icon, style]} {...props} />
);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default IconHomeScreen;
