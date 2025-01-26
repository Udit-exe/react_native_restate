import { Image, SafeAreaView, Text, View } from "react-native";
import { Link } from "expo-router";
import images from "@/constants/images";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex flex-row justify-between items-center mt-5">
          <View className="flex flex-row items-center">
            <Image source={images.avatar} className="size-12 rounded-full"/>
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text >Good Morning</Text>
              <Text>Mojo</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
