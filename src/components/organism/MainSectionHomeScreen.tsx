// src/organism/MainSectionHomeScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../molecules/CardHomeScreen';
import CardImage from '../molecules/CardImageHomeScreen';

const MainSection: React.FC = () => (
  <View style={styles.section}>
    <CardImage
      iconSource={require('../../assets/homeMain.jpg')}
      buttonTitle="Donar"
      onButtonPress={() => { }}
    />
    <View style={styles.cardContainer}>
      <Card
        iconSource={require('../../assets/homeNews.png')}
        title="Noticias"
        width={160}
        height={200}
      />
      <Card
        iconSource={require('../../assets/historyDonations.png')}
        title="Historial"
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
