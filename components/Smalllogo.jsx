import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Smalllogo = () => {
  return (
    <View style={styles.smalllogo}>
      <Image source={require("@/assets/images/quizwizlogo.png")} 
      style={{
        width:125,
        height:40,
      }}
      ></Image>
    </View>
  )
}
const styles=StyleSheet.create({
  smalllogo:{
   width:"100%",
    position:"relative",
    left:0,
    // borderWidth:2
  }
})

export default Smalllogo