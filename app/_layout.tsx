import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function RootLayout() {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "white", height: "100%",padding: 20 }}>
        <Text style={{ color: "red" }}>Ahmed Bappy</Text>
        <TextInput  placeholder="Enter your name" style={{ borderWidth: 1, borderColor: "gray", padding: 10, width: "80%", marginTop: 20,borderRadius: 5 }} />
        <TouchableOpacity style={{ backgroundColor: "green", padding: 10, marginTop: 20, borderRadius: 5, width: "80%", alignItems: "center" }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
