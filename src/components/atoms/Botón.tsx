//Separa en mas botones para poder hacer la navegacion
import React from 'react';
import { TouchableOpacity, Text, Image, ImageBackground, StyleSheet, ViewStyle, TextStyle, ImageSourcePropType, GestureResponderEvent, ImageStyle } from 'react-native';

const Botón: React.FC<{
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: ImageSourcePropType; 
  backgroundImage?: ImageSourcePropType; 
  onPress?: (event: GestureResponderEvent) => void;
  footerMode?: boolean; 
  iconStyle?: ImageStyle;
  children?: React.ReactNode; 
}> = ({ style, textStyle, icon, backgroundImage, onPress, footerMode, iconStyle, children }) => {
  const buttonStyle = footerMode ? styles.footerButton : styles.button;

  if (backgroundImage) {
    return (
      <TouchableOpacity style={[buttonStyle, style]} onPress={onPress}>
        <ImageBackground source={backgroundImage} style={[styles.backgroundImage, buttonStyle]}>
          {icon ? (
            <Image source={icon} style={[styles.icon, iconStyle]} />
          ) : (
            children
          )}
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={[buttonStyle, style]} onPress={onPress}>
      {icon ? (
        <Image source={icon} style={[styles.icon, iconStyle]} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#228154',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButton: {
    backgroundColor: 'transparent', 
    padding: 0,
    borderRadius: 0,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  icon: {
    resizeMode: 'contain',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default Botón;
