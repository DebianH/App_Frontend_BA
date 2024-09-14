import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface ProfileButtonProps {
  onPress: () => void;
}

const QrButton: React.FC<ProfileButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.iconTextContainer}>
        <Icon name="bar-chart-outline" size={32} color="#000000" />
        <Text style={styles.buttonText}>QR</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: '#c0c0c0',
  },
  iconTextContainer: {
    alignItems: "center",
  },
  buttonText: {
    fontSize: 12,
    color: "#000000",
    marginTop: 2,
  },
});
