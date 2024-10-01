import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CameraView } from "expo-camera";
import QRCode from "react-native-qrcode-svg";

interface ProductData {
  title: string;
  imageUrl: string;
}

export default function QrScreenPage() {
  const [productData, setProductData] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [qrValue, setQrValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [cancelCount, setCancelCount] = useState(0); // Estado para contar las veces que se presiona "Cancelar"

  const IdProducts = [7]; // IDs de las categorías a obtener

  const fetchProductData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await Promise.all(
        IdProducts.map(async (id) => {
          try {
            const response = await fetch(
              `https://baq-inventory-fp9n.onrender.com/api/v1/categoryImage/${id}`
            );
            const json = await response.json();

            console.log("Datos recibidos del servidor:", json);

            if (json.response && json.response.categoryImage) {
              return {
                title: json.response.categoryImage.categoryName || "Categoría 01 desconocida",
                imageUrl: json.response.categoryImage.categoryImage || "https://via.placeholder.com/150",
              };
            } else {
              return { title: `Categoría ${id} desconocida`, imageUrl: "https://via.placeholder.com/150" };
            }
          } catch (innerError) {
            console.error("Error al obtener los datos para el ID:", id, innerError);
            return { title: "Error", imageUrl: "https://via.placeholder.com/150" };
          }
        })
      );
      setProductData(data);
      setQrValue(JSON.stringify(data)); // Generar valor QR a partir de los datos obtenidos
    } catch (error) {
      console.error("Error al cargar los datos:", error);
      setError("Error al cargar los datos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (cancelCount === 1) {
      fetchProductData();
    }
  }, [cancelCount]);

  const handleCancel = () => {
    if (cancelCount === 0) {
      // Primera vez que se presiona "Cancelar"
      setCancelCount(1); // Se activa la carga de datos
    } else if (cancelCount === 1 && !loading) {
      // Segunda vez que se presiona "Cancelar" (después de que los datos han sido cargados)
      setCancelCount(2); // Se muestra el código QR
      setIsVisible(false);
    }
  };

  const isValidUrl = (url: any) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
  };

  const handleBarCodeScanned = ({ data: data }: any) => {
    if (!isValidUrl(data)) {
      Alert.alert("Error", "Código QR no contiene una URL válida");
    }
    Linking.openURL(data);
  };

  const openScanner = () => {
    setIsVisible(true);
    setCancelCount(0); // Reiniciar el conteo de cancelar cuando abrimos el escáner
  };

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "semibold",
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        Escanear QR
      </Text>
      <View style={styles.square}>
        {isVisible && cancelCount < 2 && (
          <CameraView
            style={StyleSheet.absoluteFill}
            facing="back"
            onBarcodeScanned={handleBarCodeScanned}
          />
        )}

        {cancelCount === 2 && (
          // Mostrar el QR al presionar "Cancelar" por segunda vez
          <QRCode value={qrValue} size={240} />
        )}

        {cancelCount === 1 && loading && (
          // Mostrar el indicador de carga cuando se presiona "Cancelar" por primera vez
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </View>
      {error && <Text>{error}</Text>}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonLeft} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRight} onPress={openScanner}>
          <Text style={styles.buttonText}>Leer QR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 280,
    height: 280,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center", // Centramos el contenido dentro del cuadrado
    alignItems: "center", // Centramos el contenido dentro del cuadrado
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 50,
  },
  buttonLeft: {
    position: "absolute",
    left: 30,
    backgroundColor: "#d3e6d1",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  buttonRight: {
    position: "absolute",
    right: 30,
    backgroundColor: "#77c528",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderColor: "#828282",
    borderWidth: 1,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
    fontWeight: "semibold",
  },
});
