import{
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
} from 'react-native';

import { router, useLocalSearchParams } from 'expo-router';
import icons from '@/constants/icons';
import images from '@/constants/images';
import Comment from '@/components/Comment';
import { facilities } from '@/constants/data';

import { useAppwrite } from '@/lib/useAppwrite';
import { getPropertyById } from '@/lib/appwrite';

const Property = () =>{
  const {id} = useLocalSearchParams<{id:string}>();

  const windowHeight = Dimensions.get("window").height;
  
  const {data :property} = useAppwrite({
    fn: getPropertyById,
    params:{
      id:id!,
    },
  });

  return(
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName='pb-32 bg-white'
      >
        <View className='relative w-full' style={{height :windowHeight/2}}>
          <Image
            source={{uri:property?.image}}
            className='size-full'
            resizeMode='cover'
          />
          <Image
            source={images.whiteGradient}
            className='absolute top-0 w-full z-40'
          />

          <View
            className='z-50 absolute inset-x-7'
            style = {{
              top: Platform.OS === "ios" ? 70 :20,
            }}
          >

            <View className='flex flex-row items-center w-full justify-between'>
              <TouchableOpacity
                onPress={() => router.back()}
                className='flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center'
              >
                <Image source={icons.backArrow} className='size-5'/>
              </TouchableOpacity>
              
              <View
                className='flex flex-row items-center gap-3'  
              >
                <Image 
                  source={icons.heart}
                  className='size-7'
                  tintColor={'#191D31'}
                />
                <Image source={icons.send} className='size-7'/>
              </View>
            </View>
          </View>
        </View>

        <View className='px-5 mt-7 flex gap-2'>
          <Text className='text-2xl font-rubik-extrabold'>
            {property?.name}
          </Text>

          <View className='flex flex-row items-center gap-3'>
            <View className='flex flex-row items-center px-4 py-2 bg-primary-100 rounded-full'>
              <Text className='text-xs font-rubik-bold text-primary-300'>
                {property?.type}
              </Text>
            </View>

            <View className='flex flex-row items-center gap-2'>
              <Image source={icons.star} className='size-5'/>
              <Text className='text-black-200 text-sm mt-1 font-rubik-medium'>
                {property?.rating} ({property?.reviews.length} reviews)
              </Text>
            </View>
          </View>

          <View>
            <Viwe></Viwe>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}