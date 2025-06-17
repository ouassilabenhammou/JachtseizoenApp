import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, View } from 'react-native';


export default function Layout() {
  return (
    <Tabs
      tabBar={(props) => (
        <View
          style={{
            position: 'absolute',
            bottom: 20,
            width: '100%',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: '90%',
              maxWidth: 378,
              backgroundColor: '#FFFFFF33',
              borderRadius: 36,
              padding: 1,
            }}
          >
            <View
              style={{
                backgroundColor: '#121212',
                borderRadius: 34,
                overflow: 'hidden',
                height: 64,
                justifyContent: 'center',
              }}
            >
              <BottomTabBar {...props} />
            </View>
          </View>
        </View>
      )}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'transparent',
          height: 64,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#555',
        tabBarLabelStyle: {
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Thuis',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/icons/thuis.png')}
              style={{ width: 24, height: 24, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="kaart"
        options={{
          title: 'Kaart',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/icons/kaart.png')}
              style={{ width: 24, height: 24, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />


<Tabs.Screen
  name="kanaal"
  options={{
    tabBarLabel: () => null,
    headerShown: false,
    tabBarIcon: () => (
      <LinearGradient
        colors={['#FF8000', '#F94200']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          width: 55,
          height: 55,
          borderRadius: 27.5,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 25,
        }}
      >
        <Image
          source={require('../../assets/icons/megaphone.png')}
          style={{
            width: 24,
            height: 24,
            tintColor: 'white',
          }}
          resizeMode="contain"
        />
      </LinearGradient>
    ),
  }}
/>



      <Tabs.Screen
        name="spelers"
        options={{
          title: 'Spelers',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/icons/target.png')}
              style={{ width: 24, height: 24, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profiel"
        options={{
          title: 'Profiel',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/icons/profiel.png')}
              style={{ width: 24, height: 24, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}

