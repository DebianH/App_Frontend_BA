import React from "react";
import { View, StyleSheet, ScrollView, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginInput from "../molecules/LoginInput";
import AuthButton from "../organism/AuthButton";
import Logo from "../../assets/BAQ-Logo.png";
const LoginScreenPage: React.FC = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../assets/BAQ-Logo.png")}
        />
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
  logo: {
    height: 120,
    width: 300,
    marginTop: 50,
    alignSelf: "center",
  },
});
export default LoginScreenPage;
