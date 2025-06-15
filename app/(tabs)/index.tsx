import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const CARD_WIDTH = Math.min(width * 0.9, 378);

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center bg-black">
      <ScrollView contentContainerStyle={{ alignItems: "center", paddingVertical: 16 }}>
        <View className="flex-col items-center space-y-4 w-full" style={{ maxWidth: 378 }}>
          <Text className="text-white self-start text-lg font-bold">Dag 1</Text>

          {/* Kaart */}
          <View
            className="rounded-2xl overflow-hidden items-center justify-center bg-red-500"
            style={{ width: CARD_WIDTH, height: 151 }}
          >
            <Image
              source={require('../../assets/images/countour.png')}
              resizeMode="cover"
              style={{ width: CARD_WIDTH, height: 151, borderRadius: 16 }}
            />
          </View>

          {/* Most wanted */}
          <View
            className="rounded-2xl overflow-hidden items-center justify-center bg-orange-500"
            style={{ width: CARD_WIDTH, height: 134 }}
          >
            <Image
              source={require('../../assets/images/countour.png')}
              resizeMode="cover"
              style={{ width: CARD_WIDTH, height: 134, borderRadius: 16 }}
            />
            <Text className="text-white absolute top-4 left-4">
              Most wanted{"\n"}
              Morad & Ouassima{"\n"}
              Afstand tot team stuk <Text className="font-bold">10km</Text>
            </Text>
          </View>

          {/* Tips */}
          <Text className="text-white self-start text-lg font-bold">Tips</Text>

          <View
            className="rounded-2xl bg-neutral-600 opacity-20 p-4"
            style={{ width: CARD_WIDTH, height: 288 }}
          >
            <Text className="text-white">Tip 1</Text>
          </View>

          <View
            className="rounded-2xl bg-neutral-600 opacity-20 p-4"
            style={{ width: CARD_WIDTH, height: 93 }}
          >
            <Text className="text-white">Tip 2</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
