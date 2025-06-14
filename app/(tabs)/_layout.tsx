import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from "expo-router";

const _layout = () => {
  return (
      <Tabs
      >
          <Tabs.Screen
              name="index"
              options={{
                  title: 'Thuis',
                  headerShown: false
              }}
          />

<Tabs.Screen
              name="deelnemers"
              options={{
                  title: 'Deelnemers',
                  headerShown: false
              }}
          />

<Tabs.Screen
              name="profiel"
              options={{
                  title: 'Profiel',
                  headerShown: false
              }}
          />
    </Tabs>
  )
}

export default _layout