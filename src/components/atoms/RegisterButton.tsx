import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
interface RegisterButtonProps {
  title: string;
}
const RegisterButton: React.FC<RegisterButtonProps> = ({ title }) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderStyle: "solid",
    borderBlockColor: "#000",
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 12,
    color: "#000000",
    marginTop: 2,
    alignItems: "center",
  },
});

export default RegisterButton;
