import React from 'react';
import { StyleSheet, View, Text, Image, Linking, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function AboutScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFCCBC', dark: '#D84315' }}
      headerImage={
        <Image
          source={require('@/assets/images/about.jpg')}
          style={styles.headerImage}
        />
      }>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require('@/assets/images/profile.png')}
            style={styles.profileImage}
          />
          <Text style={styles.title}>Isaac Alexander Polonio Lorenzo</Text>
          <TouchableOpacity onPress={() => Linking.openURL('mailto:20221934@itla.edu.do')}>
            <Text style={styles.email}>20221934@itla.edu.do</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#D84315',
    textAlign: 'center',
  },
  email: {
    fontSize: 18,
    color: '#1E88E5',
    textDecorationLine: 'underline',
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#4E342E',
    marginBottom: 8,
    textAlign: 'center',
  },
  headerImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});
