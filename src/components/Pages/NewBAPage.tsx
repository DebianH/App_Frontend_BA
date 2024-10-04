import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text, Image } from 'react-native';
import { getArticles } from '../../lib/fetchNews';
interface Article {
  title: string;
  content: string;
  image: string; 
}

const NewsScreen = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
      })
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            {item.image && (
              <Image source={{ uri: item.image }} style={styles.newsImage} />
            )}
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsContent}>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
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
  newsContent: {
    fontSize: 14,
    marginTop: 5,
    color: '#666',
  },
});

export default NewsScreen;
