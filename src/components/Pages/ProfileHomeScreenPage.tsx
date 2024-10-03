import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const handleLogout = () => {
    Alert.alert(
        "Confirmar",
        "¿Estás seguro de que quieres cerrar sesión?",
        [
            {
                text: "Cancelar",
                style: "cancel"
            },
            {
                text: "Cerrar",
                onPress: () => {
                    // Aquí  la lógica para cerrar sesión, 
                    // navigation.replace('LoginScreen');
                    console.log("Sesión cerrada");
                }
            }
        ],
        { cancelable: true }
    );
};

export default function ProfileScreenPage() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cardProfileHead} >
                <Image
                    source={require('../../assets/avatarMen.png')}
                    style={{ width: 70, height: 70, borderRadius: 50, backgroundColor: 'transparent', borderColor: '#9e9e9e', borderWidth: 1 }}
                    resizeMode="contain"
                />
                <Text style={{ fontSize: 18, color: '#000', textAlign: 'center', fontWeight: '400' }}>Jose Luis Guevara</Text>
            </View>
            <Pressable style={styles.cardProfile} onPress={() => navigation.navigate('EditProfile')}>
                <Icon name="pencil-sharp" size={32} color="#000000" />
                <Text >Editar Perfil</Text>
            </Pressable>
            <Pressable style={styles.cardProfile} onPress={() => navigation.navigate('AccountProfile')}>
                <Icon name="person-outline" size={32} color="#000000" />
                <Text >Cuenta</Text>
            </Pressable>
            <Pressable style={styles.cardProfile} onPress={() => navigation.navigate('EditProfile')}>
                <Icon name="shirt-outline" size={32} color="#000000" />
                <Text >Avatar</Text>
            </Pressable>
            <Pressable style={styles.cardProfile} onPress={handleLogout}>
                <Icon name="exit-outline" size={32} color="#000000" />
                <Text>Cerrar Sesión</Text>
            </Pressable>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 200 }}>
                <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center', paddingVertical: 0 }}>
                    <Image source={require('../../assets/logoGh.png')} style={{ width: 65, height: 65, }} resizeMode="contain" />
                    <Image source={require('../../assets/logoEpn.png')} style={{ width: 60, height: 60, }} resizeMode="contain" />
                </View>
                {/* <Text style={{ fontSize: 14, color: '#000', textAlign: 'center' }}>Hecho con ❤️</Text> */}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // flex: 1,
    },
    item: {
        backgroundColor: '#67d674',
        padding: 20,
        marginVertical: 2,
        marginHorizontal: 6,
    },
    title: {
        fontSize: 32,
        color: '#fff',
    },
    cardProfile: {
        width: "95%",
        marginHorizontal: 10,
        marginVertical: 2,
        height: 80,
        backgroundColor: '#D8D8D8',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#c0c0c0',
    },
    cardProfileHead: {
        width: "95%",
        flexDirection: 'row',
        gap: 20,
        marginHorizontal: 10,
        marginBottom: 10,
        height: 80,
        // backgroundColor: '#D8D8D8',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#c0c0c0',
        justifyContent: 'center',
        alignItems: 'center',
    },
});