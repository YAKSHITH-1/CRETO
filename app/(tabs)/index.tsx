import { Link } from "expo-router";
import { Text, View,  } from "react-native";

export default function index() {
  return (
    <View>

    <Link href={"/notifications"}>Visit notification screen</Link>
      <Text></Text>
  
    </View>
  );
}
