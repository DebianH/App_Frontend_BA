import React, { useState } from 'react';
import { View, Text, Pressable, Linking, Alert, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

interface QRData {
    name: string;
    id: string;
}

export default function QrGeneratePage() {
    const [qrVisible, setQRVisible] = useState<boolean>(false);

    const qrData: QRData = {
        name: 'David',
        id: '123',
    };
    const openQr = () => {
        setQRVisible(true);
    };

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "semibold", marginVertical: 10, textAlign: "center" }}>
                Generar QR
            </Text>
            <View style={styles.square}>
                {qrVisible && (
                    <QRCode
                        value={JSON.stringify(qrData)}
                        size={230}
                        logoMargin={2}
                        color="#5e9e1c"
                    />
                )}
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.buttonLeft} onPress={() => setQRVisible(false)}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </Pressable>
                <Pressable style={styles.buttonRight} onPress={openQr}>
                    <Text style={styles.buttonText}>Generar QR</Text>
                </Pressable>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({

    square: {
        width: 250,
        height: 250,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 50,
    },
    buttonLeft: {
        position: 'absolute',
        left: 20,
        backgroundColor: '#d3e6d1',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderColor: '#c0c0c0',
        borderWidth: 1,
    },
    buttonRight: {
        position: 'absolute',
        right: 20,
        backgroundColor: '#77c528',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderColor: '#828282',
        borderWidth: 1,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
        fontWeight: 'semibold',
    },
});