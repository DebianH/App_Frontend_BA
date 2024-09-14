import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
interface LoginButtonProps {
  title: string;
}
const LoginButton: React.FC<LoginButtonProps> = ({ title }) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}> {title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
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

export default LoginButton;
