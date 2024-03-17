import { StatusBar, View } from "react-native";
import { Avatar, AvatarImage } from "./Avatar";

export const Header = () => {
  const currentHeight = StatusBar.currentHeight;
  return (
    <View
      style={{ paddingTop: currentHeight }}
      className={"w-full flex flex-row justify-between bg-defBg "}
    >
      <Avatar className="w-16 h-16">
        <AvatarImage
          source={{
            uri: "https://avatars.githubusercontent.com/u/106037619?v=4",
          }}
        />
      </Avatar>
    </View>
  );
};
