import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, ImageSourcePropType, ImageStyle } from 'react-native';
import CampoDeBusqueda from '../molecules/CampoDeBusqueda';
import ImagenTexto from '../molecules/ImágenTexto';

const icon1 = require('../../assets/lupa.png'); 

const Donaciones: React.FC<{
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  reminderStyle?: TextStyle;
  imageSource?: ImageSourcePropType; 
  imageStyle?: ImageStyle;
  inputStyle?: TextStyle;
}> = ({ 
  containerStyle, 
  titleStyle, 
  reminderStyle, 
  imageSource = icon1, 
  imageStyle, 
  inputStyle 
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>Donaciones</Text>
      <Text style={[styles.reminder, reminderStyle]}>Recuerda que el mínimo para donar es de 50 kg</Text>
      <CampoDeBusqueda 
        style={styles.searchBar} 
        inputStyle={inputStyle} 
        imageSource={imageSource} 
        imageStyle={imageStyle} 
        placeholder="¿Qué producto quieres donar?" 
      />
      <ImagenTexto />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    top: 90,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reminder: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  searchBar: {
    marginBottom: 20,
  },
});

export default Donaciones;
