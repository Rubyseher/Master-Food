import { View, Text,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'

const RestaurantCard = ({
    id,imgUrl,title,rating,genre,address,short_description,dishes,long,lat,
}) => {
  return (
    <TouchableOpacity>
        <Image
            source={{uri:imgUrl}}
            className='h-36 w-64 rounded-sm'
        />
      <Text>RestaurantCard</Text>
    </TouchableOpacity>
  )
}

export default RestaurantCard