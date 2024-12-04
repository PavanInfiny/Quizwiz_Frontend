import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Background from '@/components/Background.jsx'
import Smalllogo from '@/components/Smalllogo'
const Quizconformationpage = () => {
  
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
            Quiz Id:{}
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