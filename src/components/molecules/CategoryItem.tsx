import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

type Category = {
    id: number,
    name: string,
    image: string,
    creationAt: string,
    updatedAt: string,
};

export const CategoryItem = ({ category }: { category: Category }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: category.image }} style={styles.image} />
            <Text style={styles.name}>{category.name}</Text>
        </View>
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