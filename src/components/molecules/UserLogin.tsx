import React from "react";
import { View, StyleSheet } from "react-native";
import LoginButton from "../atoms/LoginButton";
import RegisterButton from "../atoms/RegisterButton";

const UserLogin: React.FC = () => {
  return (
    <View style={styles.subcontainer}>
      <LoginButton />
      <RegisterButton />
    </View>
  );
};
const styles = StyleSheet.create({
  subcontainer: {
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    marginBottom: 70,
  },
  texto: {
    alignSelf: "center",
  },
});
export default UserLogin;
