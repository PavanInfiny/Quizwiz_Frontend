import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Participatedquizdetails = (props) => {
  const data=props.item;
  return (
    <View style={styles.maincont}>
      
      <View style={{width:"50%"}}>
      <Text>Quiz Id : {data.quizid}</Text>
      <Text>User Id : {data.userid}</Text>
      </View>
      <View style={{width:"50%"}}>
      <Text>maxscore: {data.maxscore}</Text>
      <Text>Your Score : {data.score}</Text>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  maincont:{
    borderWidth:0.2,
    borderColor:"black",
    margin:5,
    borderRadius:10,
    padding:10,
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:"#2196f317",
    height:100,
    alignItems:"center"
  },

})

export default Participatedquizdetails