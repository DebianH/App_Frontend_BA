import React from 'react';
import { View, StyleSheet, ViewStyle, ImageStyle } from 'react-native';
import BotónConTexto from '../molecules/BotónTexto'; 
import Imágen from '../atoms/Imágen';
const icon1 = require('../../assets/opcions.png');
const icon2 = require('../../assets/mail.png');
const logoImage = require('../../assets/BAQ-Logo.png');


const iconStyles: { [key: string]: ImageStyle } = {
  mail: {
    width: 35,
    height: 35,
  },
  opciones: {
    width: 50,
    height: 50,
  },
};

const Cabecera: React.FC<{
  containerStyle?: ViewStyle;
}> = ({ containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.buttonContainer}>
        <BotónConTexto icon={icon1} iconStyle={iconStyles.opciones} footerMode />
      </View>
      <View style={styles.imageContainer}>
        <Imágen source={logoImage} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <BotónConTexto icon={icon2} iconStyle={iconStyles.mail} footerMode />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 70,
    backgroundColor: '#FFFEEE',
    position: 'absolute',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    top: 30,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  buttonContainer: {
    marginHorizontal: 15,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 50,
  },
});

export default Cabecera;
