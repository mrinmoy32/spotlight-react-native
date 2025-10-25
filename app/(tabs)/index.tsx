import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={"/notifications" as any}>visit Notifications</Link>
      <Link href={"/profile" as any}>visit Profile</Link>
    </View>
  );
}
