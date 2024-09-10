import React from 'react';
import { TouchableOpacity, Text, ImageBackground, StyleSheet, ViewStyle, TextStyle, ImageSourcePropType, GestureResponderEvent, ImageStyle } from 'react-native';
import Imágen from '../atoms/Imágen'; // Importamos el componente de imagen

const ImágenTexto: React.FC<{
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: ImageSourcePropType; 
  backgroundImage?: ImageSourcePropType; 
  onPress?: (event: GestureResponderEvent) => void;
  footerMode?: boolean; 
  iconStyle?: ImageStyle;
  text?: string; // Nueva prop para manejar el texto
  imageSource?: ImageSourcePropType; // Nueva prop para la imagen
  imageStyle?: ImageStyle; // Nueva prop para el estilo de la imagen
}> = ({ 
  style, 
  textStyle, 
  icon, 
  backgroundImage, 
  onPress, 
  footerMode, 
  iconStyle, 
  text = "Guardar Datos", 
  imageSource, 
  imageStyle 
}) => {
  
  const buttonStyle = footerMode ? styles.footerButton : styles.button;

  if (backgroundImage) {
    return (
      <TouchableOpacity style={[buttonStyle, style]} onPress={onPress}>
        <ImageBackground source={backgroundImage} style={[styles.backgroundImage, buttonStyle]}>
          {icon ? (
            <Imágen source={icon} style={iconStyle} /> // Usamos el componente Imágen sin pasar `resizeMode` aquí
          ) : null}
          {text ? <Text style={[styles.text, textStyle]}>{text}</Text> : null}
          {imageSource ? <Imágen source={imageSource} style={imageStyle} /> : null}
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={[buttonStyle, style]} onPress={onPress}>
      {icon ? (
        <Imágen source={icon} style={iconStyle} /> // Aquí también, solo pasamos el estilo.
      ) : null}
      {text ? <Text style={[styles.text, textStyle]}>{text}</Text> : null}
      {imageSource ? <Imágen source={imageSource} style={imageStyle} /> : null}
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
    // Eliminamos `resizeMode` de aquí.
    width: 50,
    height: 50,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default ImágenTexto;
