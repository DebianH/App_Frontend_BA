import React from "react";
import {
    View,
    Image,
    StyleSheet,
    Text,
    Pressable,
    Linking,
    Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCameraPermissions, CameraView, CameraType } from "expo-camera";
export default function QrScreenPage() {
    const [permisos, setPermisos] = useCameraPermissions();
    const [isVisible, setIsVisible] = React.useState(false);
    const [scanning, setScanning] = React.useState(false);
    // setPermisos();

    const isValidUrl = (url: any) => {
        const regex = /^(ftp|http|https):\/\/[^ "]+$/;
        return regex.test(url);
    };

    const openScanner = () => {
        setIsVisible(true);
    };

    const handleBarCodeScanned = ({ data: data }: any) => {
        if (!isValidUrl(data)) {
            Alert.alert("Error", "Código QR no contiene una URL válida");
        }
        Linking.openURL(data);
    };
    return (
        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "semibold", marginBottom: 10, textAlign: "center" }}>
                Escanear QR
            </Text>
            <View style={styles.square}>
                {isVisible &&
                    <CameraView
                        style={StyleSheet.absoluteFill}
                        facing="back"
                        onBarcodeScanned={handleBarCodeScanned}
                    />
                }
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.buttonLeft} onPress={() => setIsVisible(false)}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </Pressable>
                <Pressable style={styles.buttonRight} onPress={openScanner}>
                    <Text style={styles.buttonText}>Leer QR</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

  square: {
    width: 280,
    height: 280,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
},
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 50,
    },
    buttonLeft: {
        position: 'absolute',
        left: 30,
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
        right: 30,
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
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 50,
    },
    buttonLeft: {
        position: 'absolute',
        left: 30,
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
        right: 30,
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