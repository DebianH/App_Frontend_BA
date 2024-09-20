import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Imágen from '../atoms/Imágen';

interface BotonImagenProps {
  icon: any;
  text: string;
  onPress: () => void;
}

const BotonImagen: React.FC<BotonImagenProps> = ({ icon, text, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
        <Imágen source={icon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  button: {
    backgroundColor: '#D8E6D3',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'column', 
    alignItems: 'center',
    width: 112,
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: '#D8E6D3',
    marginTop: 10, 
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});

export default BotonImagen;
