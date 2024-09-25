import React from 'react';
import { View, StyleSheet, ScrollView, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function QrScreenPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>QrScreenPage</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});