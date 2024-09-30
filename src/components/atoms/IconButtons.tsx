// src/components/atoms/IconButton.tsx
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

type Props = {
  iconSource: any; 
  onPress: () => void;
};

const IconButton: React.FC<Props> = ({ iconSource, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={iconSource} style={styles.icon} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
  },
});

export default IconButton;
