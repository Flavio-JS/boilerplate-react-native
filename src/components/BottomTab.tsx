import { Link, useGlobalSearchParams } from "expo-router";
import { EvilIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

export const BottomTab = () => {
  const router = useGlobalSearchParams();
  const isHome = Object.keys(router).length === 0;
  const isProfile = !!router.user;

  return (
    <View className={"flex w-full flex-row justify-between bg-defBg pb-2"}>
      <Link href="/" asChild>
        <Pressable>
          <EvilIcons
            name="play"
            size={48}
            color={isHome ? "#771de6" : "#fff"}
          />
        </Pressable>
      </Link>
      <Link href="/profile/flavio" asChild>
        <Pressable>
          <EvilIcons
            name="paperclip"
            size={48}
            color={isProfile ? "#771de6" : "#fff"}
          />
        </Pressable>
      </Link>
    </View>
  );
};
