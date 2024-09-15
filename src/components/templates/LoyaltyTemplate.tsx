// src/components/templates/LoyaltyTemplate.tsx
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import SatisfactionIcons from '../organism/SatisfactionIcons';
import FeedbackMessage from '../atoms/feedbackMessage';
import FeedbackOptions from '../molecules/FeedbackOptions';
import ConfirmButton from '../atoms/buttonConfirmFeedback';

type Props = {
  selectedSatisfaction: string | null;
  feedbackMessage: string | null;
  feedbackOptions: string[];
  onSatisfactionSelect: (iconName: string, message: string) => void;
  onOptionSelect: (option: string) => void;
  onConfirm: () => void;
};

const LoyaltyTemplate: React.FC<Props> = ({
  selectedSatisfaction,
  feedbackMessage,
  feedbackOptions,
  onSatisfactionSelect,
  onOptionSelect,
  onConfirm,
}) => (
  <ScrollView style={styles.container}>
    <Text style={styles.headerText}>Por favor valora tu experiencia</Text>
    <SatisfactionIcons onSelect={onSatisfactionSelect} />
    {feedbackMessage && <FeedbackMessage message={feedbackMessage} />}
    <FeedbackOptions options={feedbackOptions} onSelect={onOptionSelect} />
    <ConfirmButton onPress={onConfirm} />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default LoyaltyTemplate;
