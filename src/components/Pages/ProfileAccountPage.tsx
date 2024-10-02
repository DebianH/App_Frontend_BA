import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function ProfileAccountPage() {
    return (
        <SafeAreaView >
            <View>
                <Text style={{ fontSize: 14, color: '#000', textAlign: 'center', marginVertical: 100 }}>Datos de privacidad del usuario</Text>
            </View>
        </SafeAreaView>
    )
}