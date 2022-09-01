import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web'
import CatergoryCard from './CatergoryCard'
const Catergories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CatergoryCard imgUrl='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg' title='sushi'/>
      <CatergoryCard imgUrl='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg' title='sushi'/>
      <CatergoryCard imgUrl='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg' title='sushi'/>
      <CatergoryCard imgUrl='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg' title='sushi'/>
      <CatergoryCard imgUrl='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg' title='sushi'/>
      <CatergoryCard imgUrl='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg' title='sushi'/>
      <CatergoryCard imgUrl='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg' title='sushi'/>
    </ScrollView>
  )
}

export default Catergories