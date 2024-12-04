import { View, Text } from 'react-native'
import React from 'react'
import Background from '@/components/Background'
import Smalllogo from '@/components/Smalllogo'
import Footernav from '@/components/Footernav'

const Profile = () => {
  return (
    <Background>
      <Smalllogo></Smalllogo>
      <Footernav></Footernav>
    </Background>

  )
}

export default Profile