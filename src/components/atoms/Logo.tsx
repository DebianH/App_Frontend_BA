import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { ImageSource } from "react-native-vector-icons/Icon";
interface LogoProps {
  logosource: ImageSource;
}
const Logo: React.FC<LogoProps> = ({ logosource }) => {
  return (
    <View>
      {" "}
      <Image source={logosource} />
    </View>
  );
};
const styles = StyleSheet.create({
  BA: {
    height: 120,
    width: 300,
    marginTop: 150,
  },
});
export default Logo;
