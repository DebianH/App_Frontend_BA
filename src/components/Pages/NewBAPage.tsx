import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';

interface Article {
  title: string;
  description: string;
  urlToImage: string;
}

const DetailsScreen = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines',
          {
            params: {
              country: 'US', 
              apiKey: '0b8856e329bd4c5b8a93f99094102425', 
            },
          }
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error al obtener las noticias: ", error);
        setError("No se pudo cargar las noticias.");
      }
    };

    fetchNews();
  }, []);

  if (error || articles.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Aquí va el texto</Text>
      </View>
    );
  }

  const renderNewsItem = ({ item }: { item: Article }) => (
    <View style={styles.newsItem}>
      {item.urlToImage && (
        <Image source={{ uri: item.urlToImage }} style={styles.newsImage} />
      )}
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text style={styles.newsDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderNewsItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  newsItem: {
    marginBottom: 20,
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  newsImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  newsDescription: {
    fontSize: 14,
    marginTop: 5,
    color: '#666',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;