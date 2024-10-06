import React from 'react';
import { Pressable, View, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// export default function ProductItem({ product }: { product: any }) {
export default function ProductItem() {
    const { navigate } = useNavigation();
    return (
        // <Pressable>
        <View>

            <View >
                {/* <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text> */}
                <Text >Producto</Text>
            </View>
        </View>
        // </Pressable>
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
        width: 150,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        marginBottom: 10,
    },
});