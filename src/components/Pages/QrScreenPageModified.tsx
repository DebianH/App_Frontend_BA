import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import QRCode from 'react-native-qrcode-svg';

// Importing the JSON file
import loyaltyData from '../../assets/loyalty.json'; // Adjust path as necessary

export default function QrScreenPage() {
  const [showQRCode, setShowQRCode] = useState(false);

  // Use the data from Loyalty.json file
  const jsonObject = loyaltyData;

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
        <Text style={styles.subtitle}>Banco de Alimentos</Text>

        {/* Conditional rendering for the QR code or the white box */}
        <View style={styles.qrBox}>
          {showQRCode ? (
            <QRCode value={JSON.stringify(jsonObject)} size={200} />
          ) : (
            <View style={styles.emptyBox} />
          )}
        </View>

        {/* Button to show the QR code */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowQRCode(true)}
        >
          <Text style={styles.buttonText}>Generar QR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  subtitle: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrBox: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 15,
    marginBottom: 40,
  },
  emptyBox: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF', // White background
  },
  button: {
    backgroundColor: '#28a745', // Green button
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
});