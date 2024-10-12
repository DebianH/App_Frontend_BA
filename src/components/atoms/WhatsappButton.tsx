import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, Linking } from 'react-native';

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  const openWhatsApp = () => {
    const url = `whatsapp://send?phone=${phoneNumber}`;
    
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          alert('WhatsApp no está instalado en este dispositivo');
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error('Error al abrir WhatsApp', err));
  };

  return (
    <TouchableOpacity style={styles.button} onPress={openWhatsApp}>
      <Image source={require('../../assets/WhatsappIcon.png')} style={styles.icon} />
      <Text style={styles.buttonText}>Contactar por WhatsApp</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0a7d64',
    padding: 15,
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10, // Espacio entre ícono y texto
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WhatsAppButton;
