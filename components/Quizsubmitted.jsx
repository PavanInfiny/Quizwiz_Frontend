import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from './Background';
import Smalllogo from './Smalllogo';
import { Link } from 'expo-router';

const Quizsubmitted = (props) => {
  const score=props.score;
  return (
    <Background>
    <Smalllogo></Smalllogo>
    <View style={styles.continer}>
     <View style={{flex:1,
       flexDirection:"column",
       justifyContent:"center",
       alignItems:"center"
     }}>
       <Text style={styles.text}>Your Quiz Score : {score}/{props.max}</Text>
       </View>
    </View>
    <Link style={styles.genque} href={"/Home"}>Home</Link>
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
  genque: {
    marginTop: 20,
    backgroundColor: "#0a335d",
    color: "white",
    padding: 10,
    borderRadius: 10,
  },
})

export default Quizsubmitted