import React from "react";
import { View, Text } from "react-native";
import UserLogin from "../molecules/UserLogin";
interface AuthButtonProps {}

const AuthButton: React.FC<AuthButtonProps> = () => {
  return (
    <View>
      <UserLogin />
      <Text> Olvide mi contraseña</Text>
    </View>
  );
};

export default AuthButton;
