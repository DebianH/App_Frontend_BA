// molecules/actionButtons.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../atoms/actionButton';

export default function ActionButtons({ onNext, onBack, nextLabel, backLabel }: { onNext: () => void, onBack?: () => void, nextLabel: string, backLabel?: string }) {
  return (
    <View style={styles.container}>
      {onBack && <Button title={backLabel || 'Atrás'} onPress={onBack} />}
      <Button title={nextLabel || 'Siguiente'} onPress={onNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
