import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, usePathname } from 'expo-router'

const Search = () => {
    const path = usePathname();
    const params = useLocalSearchParams<{ query?: string }>();
    const [search, setSearch] = useState(params.query);

    const handleSearch = (text : string) => {
        setSearch(text);    
    }

    return (
    <View className='flex flex-row items-center justify-between w-full'>
      <Text>Search</Text>
    </View>
  )
}

export default Search