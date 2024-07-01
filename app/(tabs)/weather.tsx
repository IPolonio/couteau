import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';

const API_KEY = 'ab285a1faea248c890303739240107';
const CITY = 'Santo Domingo';

export default function WeatherScreen() {
  const [weatherData, setWeatherData] = useState<any | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#BBDEFB', dark: '#0D47A1' }}
      headerImage={
        <Image
          source={require('@/assets/images/weather.jpg')}
          style={styles.headerImage}
        />
      }>
      <View style={styles.container}>
        {weatherData !== null ? (
          <>
            <Text style={styles.temperatureText}>{`Temperatura: ${weatherData.current.temp_c}°C`}</Text>
            <Text style={styles.conditionText}>{weatherData.current.condition.text}</Text>
            <Image
              source={{ uri: `https:${weatherData.current.condition.icon}` }}
              style={styles.weatherIcon}
            />
          </>
        ) : (
          <Text style={styles.loadingText}>Cargando...</Text>
        )}
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#0D47A1',
  },
  conditionText: {
    fontSize: 24,
    color: '#0D47A1',
    marginTop: 10,
  },
  loadingText: {
    fontSize: 24,
    color: '#0D47A1',
  },
  weatherIcon: {
    width: 64,
    height: 64,
    marginTop: 10,
  },
  headerImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});
