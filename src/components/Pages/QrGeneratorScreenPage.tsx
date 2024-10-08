import React, { useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Button from '../atoms/buttonHomeScreen';

interface ProductData {
  title: string;
  imageUrl: string;
}

const QrFromFetchedData = () => {
  const [productData, setProductData] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [qrValue, setQrValue] = useState('');
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const IdProducts = [2];

  const fetchProductData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await Promise.all(
        IdProducts.map(async (id) => {
          try {
            const response = await fetch(`https://baq-inventory-fp9n.onrender.com/api/v1/categoryImage/${id}`);
            const json = await response.json();

            if (json.response && json.response.categoryImage) {
              return {
                title: json.response.categoryImage.categoryName || 'Categoría desconocida',
                imageUrl: json.response.categoryImage.categoryImage || 'https://via.placeholder.com/150',
              };
            } else {
              return { title: 'Categoría desconocida', imageUrl: 'https://via.placeholder.com/150' };
            }
          } catch (innerError) {
            return { title: 'Error', imageUrl: 'https://via.placeholder.com/150' };
          }
        })
      );

      setProductData(data);
      setQrValue(JSON.stringify(data));
    } catch (error) {
      setError('Error al cargar los datos');
    } finally {
      setLoading(false);
    }
  };

  const handleButtonPress = () => {
    setIsButtonPressed(true);
    fetchProductData();
  };

  return (
    <View style={styles.container}>
      <View style={styles.square}>
        {isButtonPressed && (
          loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : productData.length > 0 && !error ? (
            <QRCode
              value={qrValue}
              size={230} 
            />
          ) : null
        )}
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title="Generar QR" onPress={handleButtonPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
  },
  square: {
    width: 280,
    height: 280,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
    justifyContent: 'center', 
    alignItems: 'center',    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 50,
  },
});

export default QrFromFetchedData;