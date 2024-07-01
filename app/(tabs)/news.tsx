import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';

const API_KEY = 'zkwIrbq2ga8a9Qab0fzT1xHBNpSkgnOox9vmCSipX9WRWF3M';

export default function NewsScreen() {
  const [news, setNews] = useState<any>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://api.currentsapi.services/v1/latest-news?apiKey=${API_KEY}`
        );
        const data = await response.json();
        
        setNews(data.news.slice(0, 3));
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFE0B2', dark: '#FF8F00' }}
      headerImage={
        <Image
          source={require('@/assets/images/news.jpg')}
          style={styles.headerImage}
        />
      }>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Últimas Noticias</Text>
        <FlatList
          scrollEnabled={false}
          data={news}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.newsItem}>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsDescription}>{item.description}</Text>
            </View>
          )}
        />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF8F00',
    marginBottom: 20,
    textAlign: 'center',
  },
  newsItem: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#FFF3E0',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FF8F00',
  },
  newsDescription: {
    fontSize: 16,
    color: '#4E342E',
  },
  headerImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});
