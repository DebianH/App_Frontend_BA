import React from 'react';
import { View, StyleSheet, Text, ImageSourcePropType, TouchableOpacity, Image } from 'react-native';

interface CardProps {
  iconSource: ImageSourcePropType;
  title: string;
  width?: number;
  height?: number;
  onPress?: () => void;
}

const Card: React.FC<CardProps> = ({ iconSource, title, width = 160, height = 200, onPress }) => {
  return (
    <TouchableOpacity style={[styles.card, { width, height }]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
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
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    color: '#000',
    marginBottom: 10,
    textAlign: "center"
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain',
  },
});

export default Card;
