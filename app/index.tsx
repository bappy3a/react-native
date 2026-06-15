import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth()

  if (!isLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator />
      </View>
    )
  }

  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)" />;
  }

  return <Redirect href="/(auth)/sign-in" />;
}
