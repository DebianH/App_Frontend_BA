/*
import React from 'react';
import { View, StyleSheet } from 'react-native';
import QRContent from '../organism/QRContent';
import MoleculeSlider from '../molecules/Slider';

interface TemplateQRScreenProps {
  loading: boolean;
  qrData: string | null;
  error: string | null;
  selectedOption: 'generate' | 'scan';
  generateQR: () => void;
  scanQR: () => void;
}

const TemplateQRScreen: React.FC<TemplateQRScreenProps> = ({
  loading,
  qrData,
  error,
  selectedOption,
  generateQR,
  scanQR,
}) => (
  <View style={styles.container}>
    <QRContent loading={loading} qrData={qrData} error={error} />
    <MoleculeSlider
      selectedOption={selectedOption}
      onGeneratePress={generateQR}
      onScanPress={scanQR}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default TemplateQRScreen; */
