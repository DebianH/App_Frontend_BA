
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface DonationButtonProps {
    onPress: () => void;
}

const NewsButton: React.FC<DonationButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View style={styles.iconTextContainer}>
                <Icon name="home-outline" size={35} color="#000000" />
                <Text style={styles.buttonText}>Noticia</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconTextContainer: {
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 12,
        color: '#000000',
        marginTop: 2,
    },
});

export default NewsButton;