// organisms/useReg1.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextInputField from '../atoms/inputData';
//import OrganizationType from '../molecules/OrganizationType';
import ActionButtons from '../molecules/actionButtons';

export default function useReg1({ onNext }: { onNext: () => void }) {
  return (
    <View style={styles.container}>
      <TextInputField placeholder="Nombre Organización" />
      <OrganizationType />
      <TextInputField placeholder="RUC/CI" />
      <TextInputField placeholder="Dirección" />
      <ActionButtons onNext={onNext} nextLabel="Siguiente" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
