import React from 'react';
import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import Button from '../atoms/buttonHomeScreen'; // Asegúrate de que el nombre y la ruta sean correctos

interface CardWithButtonProps {
  iconSource: ImageSourcePropType;
  buttonTitle: string;
  onButtonPress: () => void;
}

const CardWithButton: React.FC<CardWithButtonProps> = ({ iconSource, buttonTitle, onButtonPress }) => (
  <View style={styles.card}>
    <View style={styles.imageContainer}>
      <Image source={iconSource} style={styles.image} />
    </View>
    <View style={styles.overlay}>
      <View style={styles.buttonContainer}>
        <Button title={buttonTitle} onPress={onButtonPress} style={styles.button} />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    padding: 0,
    backgroundColor: '#FFF',
    borderRadius: 10, // Aplica el radio de borde redondeado
    borderWidth: 1, // Grosor del borde
    borderColor: '#c0c0c0', // Color del borde
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
    width: 350,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Asegura que el contenido no sobresalga del borde redondeado
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 10, // Asegura que la imagen se ajuste al borde redondeado
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.7,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    backgroundColor: 'transparent', // Mantiene el fondo transparente para que el botón no esté afectado
  },
  button: {
    width: 120, // Ajusta el ancho del botón
    height: 40, // Ajusta la altura del botón
    borderRadius: 20, // Ajusta el borderRadius del botón si es necesario
  },
});

export default CardWithButton;
