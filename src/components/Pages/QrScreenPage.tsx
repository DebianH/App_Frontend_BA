import React from 'react';
import { View, StyleSheet, ScrollView, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function QrScreenPage() {
    return (
        <SafeAreaView style={styles.SafeAreaView}>

            <View style={styles.container}>
                <Text>QrScreenPage</Text>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
    },
    subtitle: {
        fontSize: 24,
        color: '#000',
        flex: 1,
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },

});