import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  CameraView,
  CameraType,
  CameraProps,
  useCameraPermissions,
} from "expo-camera";
export default function QrScreenPage() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
        <Text> Aqui es la camara</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  subtitle: {
    fontSize: 24,
    color: "#000",
    flex: 1,
    textAlign: "center",
    marginTop: 25,
    marginBottom: 10,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
