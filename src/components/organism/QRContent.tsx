/*
import React from 'react';
import { View, StyleSheet } from 'react-native';
import AtomText from '../atoms/qrText';
import AtomLoadingIndicator from '../atoms/qrLoadingIndicator';
import MoleculeQRCodeDisplay from '../molecules/QRCodeDisplay';

interface OrganismQRContentProps {
  loading: boolean;
  qrData: string | null;
  error: string | null;
}

const OrganismQRContent: React.FC<OrganismQRContentProps> = ({ loading, qrData, error }) => {
  if (loading) {
    return <AtomLoadingIndicator />;
  }

  if (error) {
    return <AtomText content={error} style={styles.errorText} />;
  }

  if (qrData) {
    return <MoleculeQRCodeDisplay qrData={qrData} />;
  }

  return <AtomText content="No se ha generado un QR" />;
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 20,
  },
});

export default OrganismQRContent; */
