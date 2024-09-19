import React from "react";
import { View, StyleSheet, Image, ImageSourcePropType } from "react-native";
interface LogoProps {
  logosource: ImageSourcePropType;
}
const Logo: React.FC<LogoProps> = ({ logosource }) => {
  return (
    <View>
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
