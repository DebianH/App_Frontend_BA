import React from "react";
import { View, Text, StyleSheet } from "react-native";
import UserLogin from "../molecules/UserLogin";
interface AuthButtonProps {}

const AuthButton: React.FC<AuthButtonProps> = () => {
  return (
    <View style={style.container}>
      <UserLogin />
      <View style={style.subcontainer}>
        <Text> Olvide mi contraseña </Text>
      </View>
    </View>
  );
};

export default AuthButton;
const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  subcontainer: {
    marginBottom: 350,
    alignSelf: "center",
  },
});
