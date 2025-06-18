import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

const CARD_WIDTH = 170;
const CARD_HEIGHT = 203;
const CARD_SPACING = 16;
const WRAPPER_WIDTH = CARD_WIDTH * 2 + CARD_SPACING;

// Preload alle deelnemer-afbeeldingen handmatig
const imageMap: Record<number, any> = {
  0: require('../../assets/images/deelnemer1.png'),
  1: require('../../assets/images/deelnemer2.png'),
  2: require('../../assets/images/deelnemer3.png'),
  3: require('../../assets/images/deelnemer4.png'),
  4: require('../../assets/images/deelnemer5.png'),
  5: require('../../assets/images/deelnemer6.png'),
  6: require('../../assets/images/deelnemer7.png'),
  7: require('../../assets/images/deelnemer8.png'),
  8: require('../../assets/images/deelnemer9.png'),
  9: require('../../assets/images/deelnemer10.png'),
};

const naam = [
  'SAM & RIJK',
  'MICHELLA',
  'STUNT,JE & DONNY RONNY',
  'RHODE',
  'ELS & MIKE',
  'TYGO',
  'JAYJAY & BIZZEY',
  'DYANTHA',
  'MORAD & OUASSIMA',
  'THIJS'
];
const deelnemers = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <ScrollView
        contentContainerStyle={{
          paddingVertical: 16,
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: WRAPPER_WIDTH,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {[...Array(10)].map((_, index) => (
            <View
              key={index}
              style={{
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                borderRadius: 16,
                overflow: 'hidden',
                backgroundColor: '#222',
                marginBottom: CARD_SPACING,
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Oranje genummerde badge rechtsboven */}
              <View
                style={{
                  position: 'absolute',
                  top: 20,
                  right: 8,
                  width: 28,
                  height: 28,
                  borderRadius: 14,
                  backgroundColor: 'transparent',
                  borderWidth: 2,
                  borderColor: '#FB7A2A',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 3,
                }}
              >
                <Text style={{ fontWeight: 'bold', color: 'white' }}>{index + 1}</Text>
              </View>

              {/* Achtergrond contour */}
              <Image
                source={require('../../assets/images/countour.png')}
                resizeMode="cover"
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  borderRadius: 16,
                  top: 0,
                  left: 0,
                  zIndex: 0,
                }}
              />

              {/* Overlay onderin */}
              <Image
                source={require('../../assets/images/spelersBg.png')}
                style={{
                  width: '100%',
                  position: 'absolute',
                  bottom: 5,
                  borderRadius: 10,
                  zIndex: 1,
                }}
              />

              {/* Deelnemer-afbeelding */}
              <View
                style={{
                  position: 'absolute',
                  bottom: 40,
                  width: '100%',
                  height: 129,
                  zIndex: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
               
                <Image
                  source={imageMap[index]}
                  resizeMode="contain"
                  style={{
                    width: 140,
                    height: 160,
                    bottom: -10,
                  }}
                />
                <Text
                  style={{
                    color: 'white',
                    top: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {naam[index] ? naam[index] : `naam ${index + 1}`}
                </Text>
              </View>
        
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default deelnemers;
