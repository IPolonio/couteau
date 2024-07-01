import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Image } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function AgePredictionScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const predictAge = async () => {
    try {
      const response = await fetch(`https://api.agify.io/?name=${name}`);
      const data = await response.json();
      setAge(data.age);
      setCategory(data.age < 18 ? 'Joven' : data.age < 60 ? 'Adulto' : 'Anciano');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFF9C4', dark: '#FBC02D' }}
      headerImage={
        <Image
          source={require('@/assets/images/age.png')}
          style={styles.headerImage}
        />
      }>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Ingresa un nombre"
          value={name}
          onChangeText={setName}
        />
        <Button title="Predecir Edad" onPress={predictAge} color="#FBC02D" />
        {age !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Edad: {age}</Text>
            <Text style={styles.resultText}>Categoría: {category}</Text>
          </View>
        )}
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
    borderColor: '#FBC02D',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  resultContainer: {
    marginTop: 20,
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#FBC02D',
  },
  resultText: {
    color: '#FFF',
    fontSize: 18,
  },
  headerImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});
