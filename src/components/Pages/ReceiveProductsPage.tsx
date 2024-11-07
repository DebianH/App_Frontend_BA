import React, { useState } from "react";
import {
    View,
    Image,
    StyleSheet,
    Text,
    Pressable,
    FlatList,
    Modal,
    Alert,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import RBSheet from 'react-native-raw-bottom-sheet';

type BottomSheetModalProps = {
    bottonSheRef: React.RefObject<any>;
    children: React.ReactNode;
};

export default function ReceiveProductsPage() {
    const donationsReceive = [
        {
            id: 1,
            nameId: "ABCD123",
            qty: 10,
            enterprise: "Empresa Ecuatoriana",
            location: "Quito Sur",
            products: [
                {
                    id: 1,
                    nameProduct: "Cebolla",
                    // image: require('../../assets/donation1.png'),
                    qtyProduct: 2,
                    creationAt: "2023-03-01",
                    updatedAt: "2023-03-01",
                },
                {
                    id: 2,
                    nameProduct: "Tomate",
                    // image: require('../../assets/donation1.png'),
                    qtyProduct: 8,
                    creationAt: "2023-03-01",
                    updatedAt: "2023-03-01",
                },
            ],
            // image: require('../../assets/donation1.png'),
            creationAt: "2023-03-01",
            updatedAt: "2023-03-01",
        },
        {
            id: 2,
            nameId: "ZXY7893",
            qty: 14,
            enterprise: "Kfc Solanda",
            location: "Solanda",
            products: [
                {
                    id: 1,
                    nameProduct: "Papas",
                    // image: require('../../assets/donation2.png'),
                    qtyProduct: 1,
                    creationAt: "2023-03-01",
                    updatedAt: "2023-03-01",
                },
                {
                    id: 2,
                    nameProduct: "Queso",
                    // image: require('../../assets/donation2.png'),
                    qtyProduct: 9,
                    creationAt: "2023-03-01",
                    updatedAt: "2023-03-01",
                },
            ],
        },

    ];
    const [modalVisible, setModalVisible] = useState(false);
    const ProductItem = ({ donation }: any) => {
        return (
            <View style={styles.card}>
                <View style={{ flexDirection: 'column', gap: 10, justifyContent: 'center', alignItems: 'flex-start' }}>
                    <View style={{ flexDirection: 'row', gap: 10, }}>
                        <Icon name="bag-handle" size={20} color="green" />
                        <Text style={{ fontSize: 16, color: '#4a4a4a' }}>{donation.products[0].nameProduct}</Text>
                        <Text style={{ fontSize: 16, color: '#4a4a4a', fontWeight: "bold" }}>kg:{donation.qty}</Text>
                    </View>
                    <View style={{ flexDirection: 'column', }}>
                        <View style={{ flexDirection: 'row', gap: 5, }}>
                            <Icon name="hand-left-outline" size={15} color="#4a4a4a" />
                            <Text>{donation.enterprise}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 5, }}>
                            <Icon name="location-outline" size={15} color="#4a4a4a" />
                            <Text>{donation.location}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Pressable style={{ backgroundColor: '#6dcc25', paddingHorizontal: 25, paddingVertical: 10, borderRadius: 15 }} onPress={() => setModalVisible(true)}>
                        <Text style={{ color: 'white', fontSize: 18 }}>Ver</Text>
                    </Pressable>
                </View>
            </View>
        );
    };

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 20, flex: 1 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 15, textAlign: "center" }}>
                Donaciones
            </Text>
            <View style={{ flexDirection: 'row', gap: 5, justifyContent: 'center', alignItems: 'center', }}>
                <Icon name="checkmark-circle-outline" size={15} color="green" />
                <Text>Disponibles</Text>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={donationsReceive}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <ProductItem donation={item} />}
                    contentContainerStyle={styles.list}
                />
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Quiere cerrar el modal.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 5, borderColor: '#6dcc25', borderWidth: 1, paddingHorizontal: 30, paddingVertical: 10, borderRadius: 15 }}>
                            <Icon name="gift-outline" size={20} color="#010101" />
                            <Text style={styles.modalText}>Descripción productos</Text>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5, alignContent: 'center', marginBottom: 20 }}>
                                <Icon name="calendar-number-outline" size={20} color="#010101" />
                                <Text style={{ fontSize: 16, color: '#4a4a4a' }}>Fecha asignada: 09-10-2024</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, color: '#4a4a4a' }}>Productos: </Text>
                                <Text style={{ fontSize: 16, color: '#4a4a4a' }}>Papas 10kg, Queso 1kg, Tomate 3kg</Text>
                                <Text style={{ fontSize: 16, color: '#626363', fontWeight: "bold", marginBottom: 10 }}>Total: 14kg</Text>
                                <View style={{ width: "100%", height: 1, backgroundColor: '#6dcc25', marginVertical: 10 }}></View>
                                <Text style={{ fontSize: 16, color: '#4a4a4a' }}>Prioridad: Media</Text>
                                <Text style={{ fontSize: 16, color: '#626363', fontWeight: "bold" }}>Expira: 15-10-2024</Text>
                                <View style={{ width: "100%", height: 1, backgroundColor: '#6dcc25', marginVertical: 10 }}></View>
                                <Text style={{ fontSize: 16, color: '#4a4a4a' }}>Empresa: Kfc Solanda</Text>
                                <Text style={{ fontSize: 16, color: '#626363', fontWeight: "bold" }}>Dirección: Calle Aleman y Juan Perez 123</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 40, position: 'absolute', bottom: 20 }}>
                            <Pressable
                                style={{ backgroundColor: '#d3e6d1', paddingHorizontal: 25, paddingVertical: 10, borderRadius: 15 }}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Cancelar</Text>
                            </Pressable>
                            <Pressable
                                style={{ backgroundColor: '#6dcc25', paddingHorizontal: 30, paddingVertical: 10, borderRadius: 15 }}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Aceptar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        flexDirection: 'row',
        borderRadius: 8,
        borderWidth: 2,
        padding: 10,
        borderColor: "#51c910",
        gap: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        elevation: 5,
        //  iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
    },
    //--Modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        width: 320,
        height: 450,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        gap: 15,
    },
    button: {
        borderRadius: 15,
        padding: 10,
        elevation: 4,
    },
    buttonClose: {
        backgroundColor: '#6dcc25',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#626363',
    },
});