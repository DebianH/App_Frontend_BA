import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Card from '../molecules/CardHomeScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import DonationScreenCards from '../organism/DonationCardsScreen';

const DonationScreenPage: React.FC = () => {

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
        <DonationScreenCards />
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
    backgroundColor: '#FFF',
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
