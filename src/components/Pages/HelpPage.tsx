import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import BtnSheModal from '../organism/BottomSheet';

export default function HelpPage() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Text style={{ fontSize: 14, color: '#000', textAlign: 'center', marginVertical: 100 }}>Preguntas frecuentas y Ayuda</Text>
            </View>
            {/* <BtnSheModal /> */}
        </SafeAreaView>
    )

}