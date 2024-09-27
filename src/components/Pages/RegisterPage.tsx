    // src/components/pages/RegisterPage.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { RegisterTemplate } from "../templates/RegisterTemplate";

export const RegisterPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <RegisterTemplate />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
