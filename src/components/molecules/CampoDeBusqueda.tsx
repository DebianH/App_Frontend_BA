import React from 'react';
import { View, StyleSheet, ViewStyle, TextStyle, TextInputProps, ImageSourcePropType, ImageStyle } from 'react-native';
import Entrada from '../atoms/Entrada';
import Imágen from '../atoms/Imágen';

const CampoDeBusqueda: React.FC<{
  inputStyle?: TextStyle;
  style?: ViewStyle;
  imageSource: ImageSourcePropType;
  imageStyle?: ImageStyle;
} & TextInputProps> = ({ 
  inputStyle, 
  style, 
  imageSource, 
  imageStyle, 
  ...rest 
}) => {
  return (
    <View style={[styles.container, style]}>
      <Imágen source={imageSource} style={StyleSheet.flatten([imageStyle, styles.image])} />
      <Entrada style={[styles.input, inputStyle]} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
});

export default CampoDeBusqueda;
