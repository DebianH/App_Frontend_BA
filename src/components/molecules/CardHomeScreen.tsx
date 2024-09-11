import React from 'react';
import { View, StyleSheet, Text, ImageSourcePropType, TouchableOpacity, Image } from 'react-native';
import Icon from '../atoms/iconHomeScreen';

interface CardProps {
  iconSource: ImageSourcePropType;
  title: string;
  width?: number;   // Tamaño opcional para el ancho
  height?: number;  // Tamaño opcional para la altura
}

const Card: React.FC<CardProps> = ({ iconSource, title, width = 160, height = 200 }) => {
  return (
    <TouchableOpacity style={[styles.card, { width, height }]}>
      <Text style={styles.title}>{title}</Text>
      {/* <Icon source={iconSource} /> */}
      <Image source={iconSource} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: '#D8D8D8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#c0c0c0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginVertical: 10, // Espaciado vertical entre tarjetas
  },
  title: {
    fontSize: 20,
    color: '#000',
    marginBottom: 20,
    textAlign: "center"
  },
});

export default Card;
