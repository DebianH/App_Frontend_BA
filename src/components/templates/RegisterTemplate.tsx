// src/components/templates/RegisterTemplate.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import Swiper from "react-native-swiper"; 
import { RegisterStep1 } from "../organism/RegisterStep1";
import { RegisterStep2 } from "../organism/RegisterStep2";
import { RegisterStep3 } from "../organism/RegisterStep3";

export const RegisterTemplate: React.FC = () => {
  return (
    <View style={styles.container}>
      <Swiper
        loop={false} // Desactivar loop si no quieres que los pasos se repitan
        controlsProps={{
          prevPos: false, 
          nextPos: false, 
          dotsTouchable: true,
          dotActiveStyle: { backgroundColor: "#007AFF" },
        }}
      >
        {/* Paso 1 */}
        <View style={styles.slide}>
          <RegisterStep1 />
        </View>
        {/* Paso 2 */}
        <View style={styles.slide}>
          <RegisterStep2 />
        </View>
        {/* Paso 3 */}
        <View style={styles.slide}>
          <RegisterStep3 />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
