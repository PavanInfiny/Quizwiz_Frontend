import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const HomeButton = () => {
  return (
    <View >
      <Link style={{backgroundColor:"blue",color:"white",padding:5,borderRadius:10}} href={"/Home"}>Home</Link>
    </View>
  )
}

export default HomeButton