import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function UserProfile() {
  const { user } = useLocalSearchParams();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-defFamily text-2xl text-gray-100">
        UserProfile page
      </Text>
      <Text className="font-defFamily text-base text-gray-100">
        Welcome {user}
      </Text>
    </View>
  );
}
