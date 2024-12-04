import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Quizdetails from './Quizdetails'

const Createdquiz = () => {
  const data=[{
    quiztitle:"phiysics",
    quizid:1,
    createdon:"20/11/2024",
    score:300/300,
  }]
  return (
    <View style={styles.maincont}>
      <FlatList data={data} renderItem={({item})=><Quizdetails></Quizdetails>}></FlatList>
    </View>
  )
}
const styles=StyleSheet.create({
  maincont:{
    width:"80%",
    borderWidth:2,
  }

})
export default Createdquiz