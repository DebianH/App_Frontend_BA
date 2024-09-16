import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface AtomTextProps {
  content: string;
  style?: any;
}

const AtomText: React.FC<AtomTextProps> = ({ content, style }) => (
  <Text style={[styles.text, style]}>{content}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default AtomText;
