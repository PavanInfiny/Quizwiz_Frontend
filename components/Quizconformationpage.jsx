import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Background from '@/components/Background.jsx'
import Smalllogo from '@/components/Smalllogo'
import { useLocalSearchParams, useSearchParams } from 'expo-router/build/hooks'
const Quizconformationpage = (props) => {
  console.log("confirmstion")
  const d=props.data
  return (
    <Background>
       <Smalllogo></Smalllogo>
       <View style={styles.continer}>
        <View style={{flex:1,
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center"
        }}>
          <Text style={styles.text}>Your Quiz Has Been Created Successfully</Text>
          <Text>
            Quiz Id:{d[0].quizid}
          </Text>
          </View>
       </View>
    </Background>
   
  )
}
const styles=StyleSheet.create({
  continer:{
    margin:"5%",
    width:"80%",
    marginTop:"50%",
    backgroundColor:"#bddaec",
    padding:"5%",
    height:"20%",
    borderRadius:30
  }
  ,
  text:{

  }
})

export default Quizconformationpage