import React from "react";
import { View, Text } from "react-native";
import LoginButton from "../atoms/LoginButton";
import RegisterButton from "../atoms/RegisterButton";
import UserLogin from "../molecules/UserLogin";
import { Link } from "@react-navigation/native";
import UsernameInput from "../atoms/UsernameInput";

const LoginInput: React.FC = () => {
  return (
    <View>
      <View>
        <Text> Usuario</Text>
        <UsernameInput title=" Usuario" />
        <Text> Contraseña</Text>
        <UsernameInput title="Password" />
      </View>
    </View>
  );
};

export default LoginInput;
