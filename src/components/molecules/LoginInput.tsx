import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LoginButton from "../atoms/LoginButton";
import RegisterButton from "../atoms/RegisterButton";
import UserLogin from "../molecules/UserLogin";
import { Link } from "@react-navigation/native";
import UsernameInput from "../atoms/UsernameInput";

const LoginInput: React.FC = () => {
  return (
    <View style={style.container}>
      <Text> Usuario </Text>
      <UsernameInput />
      <Text> Contraseña </Text>
      <UsernameInput />
    </View>
  );
};

export default LoginInput;
const style = StyleSheet.create({
  container: {
    paddingLeft: 15,
    marginTop: 40,
  },
});
