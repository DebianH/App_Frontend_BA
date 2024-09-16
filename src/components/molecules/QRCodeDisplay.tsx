import React from 'react';
import { View, StyleSheet } from 'react-native';
import QRCode from 'react-qr-code';

interface MoleculeQRCodeDisplayProps {
  qrData: string;
}

const MoleculeQRCodeDisplay: React.FC<MoleculeQRCodeDisplayProps> = ({ qrData }) => (
  <View style={styles.qrContainer}>
    <QRCode value={qrData} size={200} />
  </View>
);

const styles = StyleSheet.create({
  qrContainer: {
    marginBottom: 20,
  },
});

export default MoleculeQRCodeDisplay;
