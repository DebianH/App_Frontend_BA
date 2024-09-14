import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginInput from "../molecules/LoginInput";
import AuthButton from "../organism/AuthButton";
import Logo from "../../assets/BAQ-Logo.png";
const LoginScreenPage: React.FC = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
        <Logo logosource={require("../../assets/BAQ-Logo.png")} />
        <LoginInput />
        <AuthButton />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
export default LoginScreenPage;
