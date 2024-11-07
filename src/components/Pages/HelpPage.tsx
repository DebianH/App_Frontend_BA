import React, { useState } from 'react';
import { View, Text, Animated, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import WhatsAppButton from '../atoms/WhatsappButton';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [expanded, setExpanded] = useState(false);
    const [rotateAnim] = useState(new Animated.Value(0));
    const [heightAnim] = useState(new Animated.Value(0));
    const [opacityAnim] = useState(new Animated.Value(0));

    const toggleExpand = () => {
        Animated.timing(rotateAnim, {
            toValue: expanded ? 0 : 1,
            duration: 300,
            useNativeDriver: true,
        }).start();

        if (!expanded) {
            Animated.parallel([
                Animated.timing(heightAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: false,
                }),
                Animated.timing(opacityAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        } else {
            Animated.parallel([
                Animated.timing(heightAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: false,
                }),
                Animated.timing(opacityAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        }
        setExpanded(!expanded);
    };

    const arrowRotation = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg'],
    });

    const containerHeight = heightAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 80],
    });

    return (
        <View style={styles.faqItem}>
            <Pressable onPress={toggleExpand} style={styles.question}>
                <Text style={[styles.questionText, expanded && styles.questionTextActive]}>
                    {question}
                </Text>
                <Animated.View style={{ transform: [{ rotate: arrowRotation }] }}>
                    <Icon
                        name={'caret-down'}
                        size={20}
                        color={'#b1b1b1'}
                    />
                </Animated.View>
            </Pressable>

            <Animated.View style={[styles.answerContainer, { height: containerHeight }]}>
                <Animated.Text style={[styles.answer, { opacity: opacityAnim }]}>
                    {answer}
                </Animated.Text>
            </Animated.View>
        </View>
    );
};
const HelpPageScreen = () => {
    const Questions = [
        {
            question: '¿Cómo donar?',
            answer: 'En Donaciones presionas el botón donar 🥫, y luego te saldrán categorías, seleccionas lo que vas a donar 🌽 y luego aumentas en el carrito 🛻!!.',
        },
        {
            question: '¿Cómo registrarme?',
            answer: 'Regístrate en el preregistro completando el formulario, una vez este aprobado podrás iniciar sesión en la app 😀.',
        },
        {
            question: '¿Cómo editar perfil?',
            answer: 'Ve a "Mi perfil" en la app para actualizar tus datos fácilmente 😎.',
        },
        {
            question: '¿Cuáles son los límites de donación?',
            answer: 'La donación mínima es de 50 kg 🚗.',
        },
    ];

    return (
        <>
            <View style={styles.container}>
                {Questions.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </View>
            <WhatsAppButton phoneNumber="+593960447685" />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    faqItem: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 10,
        marginVertical: 5,
    },
    question: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    questionText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
        flex: 1,
    },
    questionTextActive: {
        color: '#007BFF',
    },
    arrow: {
        fontSize: 18,
        color: '#333',
    },
    answerContainer: {
        overflow: 'hidden',
        marginTop: 10,
    },
    answer: {
        fontSize: 16,
        color: '#555',
    },
});

export default HelpPageScreen;