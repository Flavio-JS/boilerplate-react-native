import "../styles/global.css";
import { useFonts, NovaMono_400Regular } from "@expo-google-fonts/nova-mono";

import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, View } from "react-native";
import { Header } from "@/components/Header";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    NovaMono_400Regular,
  });

  if (!fontsLoaded)
    return <ActivityIndicator className="flex-1 bg-defaultBg" />;

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View className="flex-1 px-4 bg-defBg">
          <Header />
          <Slot />
        </View>
        <StatusBar style="light" />
      </GestureHandlerRootView>
    </>
  );
}
