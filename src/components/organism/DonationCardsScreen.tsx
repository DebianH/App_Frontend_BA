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
    require('../../assets/frutas.png'),
    require('../../assets/frutas.png'),
    require('../../assets/frutas.png'),
    require('../../assets/frutas.png'),
    require('../../assets/frutas.png'),
    require('../../assets/frutas.png'),
    require('../../assets/frutas.png'),
    require('../../assets/frutas.png'),
  ];

  // Array de nombres o títulos
  const titles = [
    'Frutas',
    'Embutidos',
    'Agua',
    'Cereales',
    'Carnes',
    'Vegetales',
    'Comidas',
    'Otros',
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.mainSection}>
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

  mainSection: {
    transform: [{ translateY: -0 }], // Ajustar el valor según sea necesario
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // padding: 10,
    // Ajustar padding o agregar margin aquí si es necesario
  },
});

export default DonationScreenPage;
