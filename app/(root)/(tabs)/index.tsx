import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView>
      <View>
        <Text className="text-2xl text-center">Home</Text>
      </View>
    </SafeAreaView>
  )
}