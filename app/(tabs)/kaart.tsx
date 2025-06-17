import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import MapStyle from "../../constants/mapstyles.json";

const Kaart = () => {
  return (
    <MapView
      style={StyleSheet.absoluteFillObject}
      initialRegion={{
        latitude: 52.3702,
        longitude: 4.8952,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
      provider="google"
      customMapStyle={MapStyle}
    />
  );
};

export default Kaart;
