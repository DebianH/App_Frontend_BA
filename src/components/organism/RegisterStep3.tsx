// src/components/organisms/RegisterStep3.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { InputAtom } from "../atoms/InputAtom";
import { CheckboxAtom } from "../atoms/CheckboxAtom";
import { ButtonAtom } from "../atoms/ButtonAtom";

export const RegisterStep3: React.FC = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <InputAtom placeholder="Correo" />
      <InputAtom placeholder="Confirmar correo" />
      <InputAtom placeholder="Contraseña" secureTextEntry />
      <InputAtom placeholder="Confirmar Contraseña" secureTextEntry />
      <CheckboxAtom
        label="Acepto los Términos y condiciones"
        checked={termsAccepted}
        onToggle={() => setTermsAccepted(!termsAccepted)}
      />
      <ButtonAtom
        title="Confirmar"
        onPress={() => alert("Registro confirmado")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
});
