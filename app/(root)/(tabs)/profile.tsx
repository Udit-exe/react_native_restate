import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constants/icons';
import images from '@/constants/images';

const Profile = () => {
  const handleLogout = async() => {};

  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName='pb-32 px-7'  
      >
        <View className='flex flex-row items-center justify-between mt-5 '>
          <Text className='font-rubik-bold text-xl'>Profile</Text>
          <Image source={icons.bell} className='size-5'></Image>
        </View>

        <View className="flex-row flex justify-center mt-5">
          <View className='flex flex-col items-center realtive mt-5'>
            <Image source={images.avatar} className='size-44 realtive rounded-full'/>
            <TouchableOpacity className='absolute bottom-11 right-2'>
              <Image source={icons.edit} className='size-9'/>
            </TouchableOpacity>
            <Text className='text-2xl font-rubik-bold mt-2'> Mojo | Mojo Don</Text>
          </View>
        </View>

        <View className='flex flex-col mt-10'>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile