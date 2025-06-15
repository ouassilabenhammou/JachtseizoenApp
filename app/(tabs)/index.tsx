import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const CARD_WIDTH = Math.min(width * 0.9, 378);

export default function Index() {
  return (
    <>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 100,
          zIndex: 10,
          overflow: "hidden",
        }}
        
      >
        <Image
          source={require('../../assets/images/bgBlur.png')}
          style={{
            width: "100%",
            height: 100,
            position: "absolute",
            top: 0,
            left: 0,
            resizeMode: "cover",
          }}
        />
      </View>
      
      <SafeAreaView style={{ flex: 1, alignItems: "center", backgroundColor: "black" }}>
        <ScrollView contentContainerStyle={{ alignItems: "center", paddingVertical: 16 }}>
          <View style={{ flexDirection: "column", alignItems: "center", gap: 16, width: "100%", maxWidth: 378 }}>
            <Text style={{ color: "white", alignSelf: "flex-start", fontSize: 18, fontWeight: "bold" }}>Dag 1</Text>

            {/* Kaart */}
            <View
              style={{
                borderRadius: 16,
                overflow: "hidden",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red",
                width: CARD_WIDTH,
                height: 151,
              }}
            >
              <Image
                source={require('../../assets/images/countour.png')}
                resizeMode="cover"
                style={{ width: CARD_WIDTH, height: 151, borderRadius: 16 }}
              />
            </View>

            {/* Most wanted */}
            <View
              style={{
                borderRadius: 16,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "orange",
                width: CARD_WIDTH,
                height: 134,
              }}
            >
              <Image
                source={require('../../assets/images/countour.png')}
                style={{
                  width: CARD_WIDTH,
                  height: 134,
                  borderRadius: 16,
                  position: "absolute",
                }}
              />

              <Text
                style={{
                  color: "white",
                  position: "absolute",
                  top: 5,
                  left: 16,
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Most wanted
              </Text>

              <Image
                source={require('../../assets/images/mostwantedBg.png')}
                style={{
                  width: CARD_WIDTH,
                  position: "absolute",
                  bottom: 5,
                  borderRadius: 10,
                }}
              />

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  bottom: -10,
                  width: CARD_WIDTH,
                  height: 129,
                  zIndex: 1,
                }}
              >
                <Image
                  source={require('../../assets/images/deelnemer1.png')}
                  resizeMode="contain"
                  style={{
                    width: 109,
                    height: 108,
                    bottom: -1,
                  }}
                />

                <View style={{ flex: 1 }}>
                  <Text style={{ color: "white", fontSize: 14, lineHeight: 20 }}>
                    Morad & Ouassima{"\n"}
                    Afstand tot team stuk <Text style={{ fontWeight: "bold" }}>10km</Text>
                  </Text>
                </View>
              </View>
            </View>

            {/* Tips */}
            <Text
              style={{
                color: "white",
                alignSelf: "flex-start",
                fontSize: 18,
                fontWeight: "bold"
              }}>Tips</Text>

            <View
              style={{
                borderRadius: 16,
                backgroundColor: "rgba(75, 85, 99, 0.2)", 
                padding: 16,
                width: CARD_WIDTH,
                height: 288,
              }}
            >
              <Text style={{ color: "white" }}>Tip 1</Text>
            </View>

            <View
              style={{
                borderRadius: 16,
                backgroundColor: "rgba(75, 85, 99, 0.2)", // neutral-600 met opacity 20%
                padding: 16,
                width: CARD_WIDTH,
                height: 93,
              }}
            >
              <Text style={{ color: "white" }}>Tip 2</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

