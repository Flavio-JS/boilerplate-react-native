import { StatusBar, View } from "react-native";
import { Avatar, AvatarImage } from "./Avatar";

export const Header = () => {
  const currentHeight = StatusBar.currentHeight;
  return (
    <View
      style={{ paddingTop: currentHeight }}
      className={"flex w-full flex-row justify-between bg-defBg "}
    >
      <Avatar className="h-16 w-16">
        <AvatarImage
          source={{
            uri: "https://avatars.githubusercontent.com/u/106037619?v=4",
          }}
        />
      </Avatar>
    </View>
  );
};
