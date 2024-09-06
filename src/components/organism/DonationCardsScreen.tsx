import React from 'react';
import { View, StyleSheet, Text, ScrollView, useWindowDimensions } from 'react-native';
import Card from '../molecules/CardHomeScreen';

const DonationScreenPage: React.FC = () => {
  // Obtener el tamaño actual de la pantalla
  const { width } = useWindowDimensions();

  // Definir el ancho y alto de las cartas
  const cardWidth = width * 0.4;  // Por ejemplo, 40% del ancho de la pantalla
  const cardHeight = 200;        // Altura fija

  // Array de imágenes con sus rutas
  const icons = [
    require('../../assets/donarImagen.png'),
    require('../../assets/donarImagen.png'),
    require('../../assets/donarImagen.png'),
    require('../../assets/donarImagen.png'),
    require('../../assets/donarImagen.png'),
    require('../../assets/donarImagen.png'),
    require('../../assets/donarImagen.png'),
    require('../../assets/donarImagen.png'),
  ];

  // Array de nombres o títulos
  const titles = [
    'Categoría 1',
    'Categoría 2',
    'Categoría 3',
    'Categoría 4',
    'Categoría 5',
    'Categoría 6',
    'Categoría 7',
    'Categoría 8',
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.mainSection}>
        <Text style={styles.subtitle}>
          Nombre Jose Luis
        </Text>
        <View style={styles.cardsContainer}>
          {titles.map((title, index) => (
            <Card
              key={index}
              iconSource={icons[index]}
              title={title}
              width={cardWidth}      // Aplicar el ancho calculado
              height={cardHeight}    // Aplicar la altura calculada
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#FFF',
  },
  subtitle: {
    fontSize: 24,
    color: '#000',
    textAlign: 'left',
    marginHorizontal: 20,
    marginVertical: 30,
    fontWeight: 'bold',
  },
  mainSection: {
    transform: [{ translateY: -10 }],
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
    // Ajustar padding o agregar margin aquí si es necesario
  },
});

export default DonationScreenPage;
