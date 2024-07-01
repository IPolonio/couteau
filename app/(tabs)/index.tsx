import React from 'react';
import { StyleSheet, View, Text, Image, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Card } from '@/components/Card';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/toolbox.jpg')}
          style={styles.headerImage}
        />
      }>
      <View style={styles.container}>
        <Card>
          <Text style={styles.cardTitle}>Información General</Text>
          <Text style={styles.cardText}>
            Este proyecto está enfocado en el desarrollo de una aplicación moderna utilizando
            tecnologías actuales como React Native, Expo, y varias APIs para funcionalidades
            dinámicas.
          </Text>
        </Card>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1D3D47',
  },
  cardText: {
    fontSize: 16,
    color: '#4E342E',
    marginBottom: 8,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  headerImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});
