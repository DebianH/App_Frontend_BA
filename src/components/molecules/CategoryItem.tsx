import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import { getContentCategories } from '../../lib/fetchProducts';
import { useNavigation } from '@react-navigation/native';
import { ProductItem } from '../organism/ProductItem';
type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;  // Fecha en formato ISO
    updatedAt: string;   // Fecha en formato ISO
    category: {
        id: number;
        name: string;
        image: string;
        creationAt: string;  // Fecha en formato ISO
        updatedAt: string;   // Fecha en formato ISO
    };
};
type Category = {
    id: number,
    name: string,
    image: string,
    creationAt: string,
    updatedAt: string,
};

export const CategoryItem = ({ category }: { category: Category }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const { navigate } = useNavigation();

    async function handlePress(id: number) {

        const fetchedProducts = await getContentCategories(id);
        setProducts(fetchedProducts);
        navigate('ProductItem');

        console.log("xxx", products);
    }
    return (
        <Pressable style={styles.card} onPress={() => handlePress(category.id)}>
            <Image source={{ uri: category.image }} style={styles.image} />
            <Text style={styles.name}>{category.name}</Text>
        </Pressable>
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