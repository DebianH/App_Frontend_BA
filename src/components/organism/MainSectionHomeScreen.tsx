// src/organism/MainSectionHomeScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../molecules/CardHomeScreen';
import CardImage from '../molecules/CardImageHomeScreen';

const MainSection: React.FC = () => (
  <View style={styles.section}>
    <CardImage
      iconSource={require('../../assets/donarImagen.png')}
      buttonTitle="Donar"
      onButtonPress={() => { }}
    />
    <View style={styles.cardContainer}>
      <Card
        iconSource={require('../../assets/BAQ-Logo.png')}
        title="Tarjeta B"
        width={160}
        height={200}
      />
      <Card
        iconSource={require('../../assets/BAQ-Logo.png')}
        title="Tarjeta C"
        width={160}
        height={200}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 25, // Espacio entre CardImage y las cartas
    paddingHorizontal: 18,
  },
});

export default MainSection;
