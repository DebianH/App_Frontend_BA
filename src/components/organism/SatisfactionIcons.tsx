// src/components/organisms/SatisfactionIcons.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../atoms/IconButtons';

type Props = {
  onSelect: (iconName: string, message: string) => void;
};

const SatisfactionIcons: React.FC<Props> = ({ onSelect }) => (
  <View style={styles.iconsContainer}>
    <IconButton iconSource={require('../../assets/angryUser.png')} onPress={() => onSelect('angryUser', 'Muy malo')} />
    <IconButton iconSource={require('../../assets/sadUser.png')} onPress={() => onSelect('sadUser', 'Malo')} />
    <IconButton iconSource={require('../../assets/indifferentUser.png')} onPress={() => onSelect('indifferentUser', 'Regular')} />
    <IconButton iconSource={require('../../assets/happyUser.png')} onPress={() => onSelect('happyUser', 'Muy bueno')} />
    <IconButton iconSource={require('../../assets/happierUser.png')} onPress={() => onSelect('happierUser', 'Excelente')} />
  </View>
);

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default SatisfactionIcons;
