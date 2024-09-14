import React from "react";
import { StyleSheet, TextInput } from "react-native";

const PasswordInput: React.FC = () => {
  return <TextInput style={styles.data} placeholder="Password"></TextInput>;
};
const styles = StyleSheet.create({
  data: {
    height: 50,
    width: 330,
    borderRadius: 5,
    borderColor: "#000000",
    backgroundColor: "#f0f0f0",
  },
});
