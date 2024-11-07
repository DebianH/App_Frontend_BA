import React from 'react';
import { Pressable, Text, StyleSheet, Linking, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Pressable style={styles.button} onPress={openWhatsApp}>
                <Icon name="chatbubble-ellipses-outline" size={20} color="#fff" />
                <Text style={styles.buttonText}>Contactar</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 80,
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0a7d64',
        padding: 15,
        borderRadius: 30,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});

export default WhatsAppButton;