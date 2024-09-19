import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
// interface RegisterButtonProps {
//   title: string;
// }
const RegisterButton: React.FC = ({}) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}> Registrarse </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderStyle: "solid",
    borderColor: "#000",
    marginBottom: 40,
    padding: 10,
    width: 300,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 15,
    color: "#000000",
    marginTop: 2,
    alignItems: "center",
  },
});

export default RegisterButton;
