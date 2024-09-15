// src/components/atoms/FeedbackMessage.tsx
import React from 'react';
import { Text, StyleSheet } from 'react-native';

type Props = {
  message: string;
};

const FeedbackMessage: React.FC<Props> = ({ message }) => (
  <Text style={styles.feedbackText}>{message}</Text>
);

const styles = StyleSheet.create({
  feedbackText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: '#000000',
  },
});

export default FeedbackMessage;
