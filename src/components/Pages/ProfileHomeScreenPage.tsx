import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreenPage() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cardProfileHead} >
                <View style={{ width: 60, height: 60, backgroundColor: '#FFF', padding: 10, borderRadius: 100, borderWidth: 1, borderColor: '#d3e6d1' }}>
                </View>
                <Text style={{ fontSize: 24, color: '#000', textAlign: 'center' }}>Jose Luis</Text>
            </View>
            <TouchableOpacity style={styles.cardProfile} onPress={() => navigation.navigate('EditProfile')}>
                <Text >Editar Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardProfile} onPress={() => navigation.navigate('EditProfile')}>
                <Text >Cuenta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardProfile} onPress={() => navigation.navigate('EditProfile')}>
                <Text >Cerrar Sesión</Text>
            </TouchableOpacity>
            <View>
                <Text style={{ fontSize: 14, color: '#000', textAlign: 'center', marginVertical: 100 }}>Hecho por{'\n'} Epn - GH DevCompany</Text>
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
        marginVertical: 2,
        height: 80,
        backgroundColor: '#D8D8D8',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#c0c0c0',
        // alignContent: 'center',
        // justifyContent: 'center',
        alignItems: 'center',
    },
});