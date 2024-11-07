import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    article: Article;
    onClose: () => void;
}

export type Article = {
    title: string;
    content: string;
    image: string;
    articleUrl: string;
};

const NewsDetail: React.FC<Props> = ({ article, onClose }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Noticia</Text>
                <TouchableOpacity onPress={onClose}>
                    <Icon name="close-circle-outline" size={30} color="#404040" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {article.image && (
                    <Image source={{ uri: article.image }} style={styles.newsImage} />
                )}
                <Text style={styles.newsTitle}>{article.title}</Text>
                <Text style={styles.newsContent}>{article.content}</Text>

                <Text
                    style={styles.linkText}
                    onPress={() => Linking.openURL(article.articleUrl)}
                >
                    Leer artículo completo
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#c0c0c0',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    scrollViewContent: {
        marginTop: 10,
    },
    newsImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 15,
    },
    newsTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    newsContent: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
    },
    linkText: {
        fontSize: 16,
        color: 'blue',
        marginTop: 10,
    },
});

export default NewsDetail;