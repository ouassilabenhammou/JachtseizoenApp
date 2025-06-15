import { Tabs } from "expo-router";
import React from 'react';


const _layout = () => {
    return (
   
      <Tabs
            screenOptions={{
              tabBarStyle: {
              backgroundColor: 'orange',
              borderRadius: 25,
              position: 'absolute',
                  
              }
          }}
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