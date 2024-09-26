/*
import React from 'react';
import { View, StyleSheet } from 'react-native';
import AtomButton from '../atoms/qrButton';

interface MoleculeSliderProps {
  selectedOption: 'generate' | 'scan';
  onGeneratePress: () => void;
  onScanPress: () => void;
}

const MoleculeSlider: React.FC<MoleculeSliderProps> = ({
  selectedOption,
  onGeneratePress,
  onScanPress,
}) => (
  <View style={styles.sliderContainer}>
    <AtomButton
      onPress={onGeneratePress}
      isActive={selectedOption === 'generate'}
      label="Generar QR"
    />
    <AtomButton
      onPress={onScanPress}
      isActive={selectedOption === 'scan'}
      label="Escanear QR"
    />
  </View>
);

const styles = StyleSheet.create({
  sliderContainer: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    borderRadius: 50,
    padding: 5,
  },
});

export default MoleculeSlider;*/
