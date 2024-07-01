import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="gender"
        options={{
          title: 'Género',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'man' : 'man-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="age"
        options={{
          title: 'Edad',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="university"
        options={{
          title: 'Universidades',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'school' : 'school-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="weather"
        options={{
          title: 'Clima',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cloud' : 'cloud-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: 'Noticias',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'newspaper' : 'newspaper-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Acerca de',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'information-circle' : 'information-circle-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
