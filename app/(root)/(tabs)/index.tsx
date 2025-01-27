import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/app/components/Search";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex flex-row justify-between items-center mt-5">
          <View className="flex flex-row items-center">
            <Image source={images.avatar} className="size-12 rounded-full"/>
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-rubik text-black-100">Good Morning</Text>
              <Text className="text-base font-rubik-medium text-black-300">Mojo</Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6"/>
        </View>
      
      </View>
      <Search/>
      <View className="my-5">
        <View className="flex flex-row items-center justify-between ">
          <Text>Featured</Text>
          <TouchableOpacity>
            <Text>See All</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  )
}
