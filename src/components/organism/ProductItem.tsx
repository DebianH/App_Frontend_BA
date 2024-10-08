import React, { useRef, useMemo } from 'react';
import { Pressable, View, StyleSheet, Text, Image, FlatList, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
import BtnSheModal from './BottomSheet';

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
        id: number;
        name: string;
        image: string;
    };
    images: string[];
};


export default function ProductItem() {
    const route: any = useRoute();
    const { products } = route.params;
    const refBSheet = useRef();

    const renderItem = ({ item }: { item: Product }) => (

        <Pressable style={styles.card} onPress={() => refBSheet.current.open()} >
            <Image
                source={{ uri: "https://www.pngall.com/wp-content/uploads/2016/03/Fruit-PNG-HD.png" }}
                style={styles.productImage}
            />
            <Text style={styles.productTitle}>{item.title}</Text>
        </Pressable>
    );

    return (
        <>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.container}
                numColumns={2}
                columnWrapperStyle={styles.row}
                key={(products.length > 0) ? 'fixed-columns' : 'dynamic-columns'}
            />
            <BtnSheModal bottonSheRef={refBSheet} >
                <View style={{ flexDirection: 'column', gap: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Sandia</Text>
                    <Image source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/025/067/643/small/watermelon-with-ai-generated-free-png.png" }}
                        style={{ width: 100, height: 100 }}
                        resizeMode="contain"
                    />
                    <Text>Ingrese la cantidad a donar</Text>
                    <TextInput
                        // style={styles.input}
                        // onChangeText={onChangeNumber}
                        value="5"
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                    />
                    <Pressable style={{ backgroundColor: 'green', paddingHorizontal: 25, paddingVertical: 10, marginTop: 10, borderRadius: 15 }}>
                        <Text style={{ color: 'white', fontSize: 18 }}>Agregar</Text>
                    </Pressable>
                </View>
            </BtnSheModal>
        </>
    );
};

const styles = StyleSheet.create({
    name: {
        fontSize: 18,
        color: '#333',
    },
    image: {
        width: 150,
        height: 150,
    },
    card: {
        width: 170,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        marginBottom: 10,
    },
    row: {
        flex: 1,
        justifyContent: 'space-around',
        paddingTop: 10,
    },
    //---
    container: {
        padding: 5,
    },
    productCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    productImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    productTitle: {
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center',
    },
});