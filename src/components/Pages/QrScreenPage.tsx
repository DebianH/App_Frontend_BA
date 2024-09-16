import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import QrScreenTemplate from '../templates/QrScreenTemplate';

const QrScreenPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'generate' | 'scan'>('generate');
  const [qrData, setQrData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const generateQR = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://loyalty-zetta.vercel.app/api/qualificationsIDs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const json = await response.json();
      if (json.response && Array.isArray(json.response)) {
        const ids = json.response.map((item: { id: number }) => item.id).join(', ');
        setQrData(`IDs de calificación: ${ids}`);
      } else {
        setError('No se pudo generar el QR');
      }
    } catch (error) {
      setError('Error al generar el QR');
    } finally {
      setLoading(false);
    }
  };

  const scanQR = () => {
    setSelectedOption('scan');
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <QrScreenTemplate
        loading={loading}
        qrData={qrData}
        error={error}
        selectedOption={selectedOption}
        generateQR={() => {
          setSelectedOption('generate');
          generateQR();
        }}
        scanQR={scanQR}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});

export default QrScreenPage;
