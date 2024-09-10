import React from 'react';
import { View, StyleSheet, ViewStyle, ImageStyle } from 'react-native';
import Button from '../atoms/Botón'; 

const icon1 = require('../../assets/home.png'); 
const icon2 = require('../../assets/basket.png');
const icon3 = require('../../assets/profile.png');

const iconStyles: { [key: string]: ImageStyle } = {
  home: {
    width: 50,
    height: 50,
  },
  basket: {
    width: 40,
    height: 40,
  },
  default: {
    width: 33,
    height: 33,
  },
};

const Botónes: React.FC<{
  containerStyle?: ViewStyle;
}> = ({ containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.buttonContainer}>
        <Button icon={icon1} iconStyle={iconStyles.home} footerMode />
      </View>
      <View style={styles.buttonContainer}>
        <Button icon={icon2} iconStyle={iconStyles.basket} footerMode />
      </View>
      <View style={styles.buttonContainer}>
        <Button icon={icon3} iconStyle={iconStyles.default} footerMode />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#FFFEEE',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#000000',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginHorizontal: 10,
  },
});

export default Botónes;
