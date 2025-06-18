import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapStyle from "../../constants/mapstyles.json";

const Kaart = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <LinearGradient
          colors={['#FF8000', '#F94200']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.backButton}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <Text style={styles.backButtonText}>← Terug</Text>
          </TouchableOpacity>
        </LinearGradient>
      </SafeAreaView>

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
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingLeft: 20,
    paddingTop: 10,
  },
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 999,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Kaart;
