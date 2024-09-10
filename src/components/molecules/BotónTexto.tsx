import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, ImageSourcePropType, GestureResponderEvent, ImageStyle } from 'react-native';
import Botón from '../atoms/Botón'; 

const BotónTexto: React.FC<{
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  icon?: ImageSourcePropType;
  backgroundImage?: ImageSourcePropType;
  onPress?: (event: GestureResponderEvent) => void;
  footerMode?: boolean;
  iconStyle?: ImageStyle;
  labelText?: string;
  labelStyle?: TextStyle;
}> = ({
  buttonStyle,
  textStyle,
  icon,
  backgroundImage,
  onPress,
  footerMode,
  iconStyle,
  labelText,
  labelStyle,
}) => {
  return (
    <View style={styles.container}>
      <Botón
        style={buttonStyle}
        textStyle={textStyle}
        icon={icon}
        backgroundImage={backgroundImage}
        onPress={onPress}
        footerMode={footerMode}
        iconStyle={iconStyle}
      />
      {icon && labelText && (
        <Text style={[styles.label, labelStyle]}>{labelText}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    marginTop: 8,
    color: '#000',
    fontSize: 14,
  },
});

export default BotónTexto;
