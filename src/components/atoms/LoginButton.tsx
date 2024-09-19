import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
// interface LoginButtonProps {
//   title: string;
// }
const LoginButton: React.FC = ({}) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}> Login </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#228154",
    borderRadius: 20,
    borderStyle: "solid",
    marginBottom: 20,
    padding: 10,
    width: 300,
  },
  buttonText: {
    fontSize: 15,
    color: "#ffffff",
    marginTop: 2,
    alignItems: "center",
  },
});

export default LoginButton;
