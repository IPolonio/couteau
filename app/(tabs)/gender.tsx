import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Image } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function GenderPredictionScreen() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [color, setColor] = useState('');

  const predictGender = async () => {
    try {
      const response = await fetch(`https://api.genderize.io/?name=${name}`);
      const data = await response.json();
      setGender(data.gender);
      setColor(data.gender === 'male' ? 'blue' : 'pink');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F8BBD0', dark: '#AD1457' }}
      headerImage={
        <Image
          source={require('@/assets/images/gender.jpg')}
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
        <Button title="Predecir Género" onPress={predictGender} color="#AD1457" />
        {gender && (
          <View style={[styles.resultContainer, { backgroundColor: color }]}>
            <Text style={styles.resultText}>Género: {gender}</Text>
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
    borderColor: '#AD1457',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  resultContainer: {
    marginTop: 20,
    padding: 20,
    borderRadius: 8,
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
