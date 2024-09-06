import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Header from '../molecules/Header';
import Card from '../molecules/CardHomeScreen';
import NavigationBar from '../molecules/NavigationBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import DonationScreenCards from '../organism/DonationCardsScreen';

const DonationScreenPage: React.FC = () => {
  
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
        <Header 
          logoSource={require('../../assets/BAQ-Logo.png')} 
          title="Banco" 
        />
        <DonationScreenCards/>
        <NavigationBar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  subtitle: {
    fontSize: 24,
    color: '#000000',
    textAlign: 'left',
    marginHorizontal: 20,
    marginVertical: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFEEE',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  mainSection: {
    transform: [{ translateY: -10 }],
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default DonationScreenPage;
