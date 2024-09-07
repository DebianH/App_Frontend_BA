import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Usando Ionicons

// Define el tipo de las props para el botón
interface DonationButtonProps {
  onPress: () => void;
}

const DonationButton: React.FC<DonationButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.iconTextContainer}>
        <Icon name="bag-check-outline" size={35} color="#000000" />
        <Text style={styles.buttonText}>Donar</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center', // Centra todo el contenido dentro del botón
    justifyContent: 'center',
  },
  iconTextContainer: {
    alignItems: 'center', // Centra el ícono y el texto dentro del contenedor
  },
  buttonText: {
    fontSize: 12,
    color: '#000000', // Color del texto negro
    marginTop: 2, // Reducido el espacio entre el ícono y el texto
  },
});

export default DonationButton;
