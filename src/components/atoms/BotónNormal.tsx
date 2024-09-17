import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, GestureResponderEvent } from 'react-native';

const BotónNormal: React.FC<{
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: (event: GestureResponderEvent) => void;
  children?: React.ReactNode;
}> = ({ style, textStyle, onPress, children }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#228154',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default BotónNormal;
