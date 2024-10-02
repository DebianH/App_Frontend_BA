import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, useWindowDimensions, ActivityIndicator, Button } from 'react-native';
import Card from '../molecules/CardHomeScreen';

const DonationScreenPage: React.FC = () => {
  const { width } = useWindowDimensions();
  const cardWidth = width * 0.4; 
  const cardHeight = 200;

  const IdProducts = [1, 2, 3, 4, 5, 6, 7, 8];

  const [productData, setProductData] = useState<{ title: string; imageUrl: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Estado para errores

  const fetchProductData = async () => {
    setLoading(true); // Asegúrate de mostrar el indicador de carga al iniciar la solicitud
    setError(null); // Reinicia el error al iniciar la solicitud
    try {
      const data = await Promise.all(
        IdProducts.map(async (id) => {
          try {
            const response = await fetch(`https://baq-inventory.onrender.com/api/v2/categoryImage/${id}`);
            const json = await response.json();

            console.log('Fetched data:', json); // Para depurar la respuesta

            if (json.response && json.response.categoryImage) {
              return {
                title: json.response.categoryImage.categoryName || 'Categoría desconocida', // Nombre de la categoría
                imageUrl: json.response.categoryImage.categoryImage || 'https://via.placeholder.com/150',  // URL de la imagen
              };
            } else {
              return { title: 'Categoría desconocida', imageUrl: 'https://via.placeholder.com/150' };
            }
          } catch (innerError) {
            console.error('Error fetching data for ID:', id, innerError);
            return { title: 'Error', imageUrl: 'https://via.placeholder.com/150' };
          }
        })
      );
      setProductData(data);
    } catch (error) {
      console.error('Error fetching product data:', error);
      setError('Error al cargar los datos');
    } finally {
      setLoading(false); // Asegúrate de ocultar el indicador de carga después de completar la solicitud
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.mainSection}>
        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <View>
            {error ? (
              <Text style={styles.errorText}>{error}</Text>
            ) : (
              <View>
                <View style={styles.cardsContainer}>
                  {productData.map((product, index) => (
                    <Card
                      key={index}
                      title={product.title} // Se usa categoryName como title
                      width={cardWidth}
                      height={cardHeight}
                      iconSource={{ uri: product.imageUrl }} // Imagen por defecto si no hay URL
                    />
                  ))}
                </View>
                <View style={styles.reloadButtonContainer}>
                  <Button title="Recargar" onPress={fetchProductData} />
                </View>
              </View>
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#FFF',
  },
  subtitle: {
    fontSize: 24,
    color: '#000',
    flex: 1,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 10,
    fontWeight: 'bold',
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
  reloadButtonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default DonationScreenPage;
