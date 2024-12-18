import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Background from './Background';
import Smalllogo from './Smalllogo';
import { Link } from 'expo-router';

const Quizsubmitted = (props) => {
  const score=props.score;
  const max=props.max;
  const [loading,setloading]=useState(true);
  const senddetails = async () => {
    try {
      console.log("inside details");
      const response = await fetch("http://192.168.1.2:8181/addparticipated", {
        method: "POST", // Specify the method
        headers: {
          "Content-Type": "application/json", // Set the content type
        },
        body: JSON.stringify({
          maxscore: max,
          quizid: props.quizid,
          score: props.score,
          userid:props.userid,
         
        }),
      }); // API URL
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      setloading(false);
      const result = await response.json(); // Parse JSON response
      console.log(result); // Set data to state
      
    } catch (err) {
      console.log(err);
    } finally {
    }
  };
  useEffect(() => {
      console.log("useEffect triggered");
      senddetails();
    }, []);
  if(loading){
    return<>
    <Background>
      <Smalllogo></Smalllogo>
      <View>
        <Text>Loading</Text>
      </View>
    </Background>
    </>
  }
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