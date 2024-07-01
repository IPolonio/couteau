import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList, Image, Linking } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function UniversitySearchScreen() {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState<any>([]);

  const searchUniversities = async () => {
    try {
      const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
      const data = await response.json();
      setUniversities(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#C8E6C9', dark: '#388E3C' }}
      headerImage={
        <Image
          source={require('@/assets/images/university.png')}
          style={styles.headerImage}
        />
      }>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Ingresa el nombre de un país en ingles"
          value={country}
          onChangeText={setCountry}
        />
        <Button title="Buscar Universidades" onPress={searchUniversities} color="#388E3C" />
        <FlatList
          data={universities}
          scrollEnabled={false}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.universityContainer}>
              <Text style={styles.universityName}>{item.name}</Text>
              <Text style={styles.universityDomain}>{item.domains[0]}</Text>
              <Text
                style={styles.universityWebsite}
                onPress={() => Linking.openURL(item.web_pages[0])}
              >
                {item.web_pages[0]}
              </Text>
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
  input: {
    borderWidth: 1,
    borderColor: '#388E3C',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  universityContainer: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#C8E6C9',
  },
  universityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  universityDomain: {
    fontSize: 16,
  },
  universityWebsite: {
    fontSize: 14,
    color: '#1E88E5',
  },
  headerImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});
