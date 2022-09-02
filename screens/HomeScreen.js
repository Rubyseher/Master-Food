import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, SearchIcon, AdjustmentsIcon } from "react-native-heroicons/solid";
import { UserIcon } from "react-native-heroicons/outline";
import { ScrollView, TextInput } from 'react-native-web';
import Catergories from '../components/Catergories';
import FeaturedRow from '../components/FeaturedRow';
const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className='bg-white pt-5 overflow-hidden'>
            <View className='flex-row pb-3 items-center mx-4 space-x-2 w-full'>
                <Image source={
                    require('../logo.jpg')
                }
                    className="w-14 h-14 bg-gray-300 p-4 rounded-full"
                />
                <View >
                    <Text className='font-bold text-gray-400 text-xs'>
                        Deliver now
                    </Text>
                    <Text className='font-bold text-xl'>
                        Current Location
                        <ChevronDownIcon size={25} color='#00ccbb' />
                    </Text>
                </View>
                <View className='absolute top-3.5 right-9 '>
                    <UserIcon size={30} color='#eb7a46' />
                </View>
            </View>

                <View className='flex-row items-center space-x-2 pb-2 mx-4 '>
                    <View className='flex-row flex-1 space-x-2 bg-slate-200 p-3 w-80'>
                        <SearchIcon color='gray' size={20} />
                        <TextInput placeholder="Resturants and cuisines"
                            keyboardType='default'
                        />
                    </View>
                    <AdjustmentsIcon size={30} color='#eb7a46' />

                </View>

            <ScrollView className='bg-gray-100'
                contentContainerStyle={{
                    paddingBottom: 100,
                }}>
                <Catergories />
                <FeaturedRow
                    id='1' 
                    title='Featured'
                    description='Paid placements from our partners'
                />
                <FeaturedRow 
                    id='2'
                    title='Tasty Discounts '
                    description='Paid placements from our partners'
                />
                <FeaturedRow
                    id='3' 
                    title='Offers Near You!'
                    description='Paid placements from our partners'
                />
            </ScrollView>
        </SafeAreaView >
    )
}

export default HomeScreen