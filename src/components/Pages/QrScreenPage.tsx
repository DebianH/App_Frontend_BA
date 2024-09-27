import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  TouchableOpacity,
  Linking,
  Alert,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useCameraPermissions, CameraView, CameraType } from "expo-camera";
import { StatusBar } from "expo-status-bar";
export default function QrScreenPage() {
  const [permisos, setPermisos] = useCameraPermissions();
  setPermisos();
  const isValidUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
  };
  const handleBarCodeScanned = ({ data }) => {
    if (!isValidUrl(data)) {
      Alert.alert("Error", "Código QR no contiene una URL válida");
    }
    Linking.openURL(data);
  };
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <CameraView
        style={StyleSheet.absoluteFill}
        facing="back"
        onBarcodeScanned={handleBarCodeScanned}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#228154",
    borderRadius: 20,
    borderStyle: "solid",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 12,
    color: "#ffffff",
    marginTop: 2,
    alignItems: "center",
  },
});
