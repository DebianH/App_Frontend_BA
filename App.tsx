// src/App.tsx
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { RegisterPage } from "./src/components/Pages/RegisterPage";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RegisterPage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
