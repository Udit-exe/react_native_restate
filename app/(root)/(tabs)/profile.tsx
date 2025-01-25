import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constants/icons';

const Profile = () => {
  const handleLogout = async() => {};

  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName='pb-32 px-7'  
      >
        <View>
          <Text className='font-rubik-bold text-xl'>Profile</Text>
          <Image source={icons.bell} className='size-5'></Image>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile