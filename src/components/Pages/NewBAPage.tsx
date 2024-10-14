import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { getArticles } from '../../lib/fetchNews';
import NewsDetail from '../Pages/NewsDetailPage'; 
import { Article } from '../../components/atoms/ArticlesInterface'; 

const NewsScreen = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  const openArticle = (article: Article) => {
    setSelectedArticle(article);
    setModalVisible(true); // Abre el modal
  };

  const closeArticle = () => {
    setModalVisible(false); // Cierra el modal
    setSelectedArticle(null); // Resetea el artículo seleccionado
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openArticle(item)}>
            <View style={styles.newsItem}>
              {item.image && (
                <Image source={{ uri: item.image }} style={styles.newsImage} />
              )}
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsContent}>{item.content}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Modal para mostrar el detalle de la noticia */}
      <Modal
        visible={modalVisible}
        animationType="slide" // Puedes cambiar esto a "fade" si lo prefieres
        transparent={true} // Esto permite que el fondo sea visible
      >
        <View style={styles.modalContainer}>
          {selectedArticle && ( // Verifica que selectedArticle no sea null
            <NewsDetail article={selectedArticle} onClose={closeArticle} />
          )}
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fondo blanco semi-transparente
    padding: 20,
    justifyContent: 'center',
  },
});

export default NewsScreen;
