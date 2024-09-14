import React from "react";
import { StyleSheet, TextInput } from "react-native";
interface UsernameProps {
  title: string;
}
const UsernameInput: React.FC<UsernameProps> = ({ title }) => {
  return <TextInput style={styles.data} placeholder={title}></TextInput>;
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
export default UsernameInput;
