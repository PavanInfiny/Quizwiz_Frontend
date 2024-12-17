import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Background from "@/components/Background";
import Smalllogo from "@/components/Smalllogo";
import Maincont from "@/components/Maincont";
import Quecont from "@/components/Quecont";
import { Link, useLocalSearchParams } from "expo-router";

const Quevalidation = () => {
  const [loading, setloading] = useState(true);
  const{text,numofque,title}=useLocalSearchParams();
  console.log("text:",text)
  console.log("numofque:",numofque)
  console.log("title",title)
  console.log("welcome")
  const [data,setdata] =useState([]);
  const fetchData = async () => {
    try {
      console.log("inside try")
      const response = await fetch("http://13.53.174.206:5000/generate-questions", {
        method: "POST", // Specify the method
        headers: {
          "Content-Type": "application/json", // Set the content type
        },
        body: JSON.stringify({
          text: text,
          num: numofque,
        }),
      }); // API URL
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json(); // Parse JSON response
      
      setdata(result);
      console.log(result); // Set data to state
    } catch (err) {
      console.log(err);
    } finally {
      setloading(false); // Stop loading
    }
  };
  useEffect(() => {
    console.log("useEffect triggered");
    fetchData();
  }, []);

  // question: "What is the capital of France?",
  //     questionnum: 1,
  //     opt1: "Berlin",
  //     opt2: "Madrid",
  //     opt3: "Paris",
  //     opt4: "Rome",
  if (loading) {
    return (
      <Background>
        <Smalllogo></Smalllogo>
        <Text style={{ fontSize: 30, marginTop: "50%" }}>Loading</Text>
      </Background>
    );
  }
  return (
    <Background>
      <Smalllogo></Smalllogo>
      <Maincont>
        <Text>dsfisjdig: {text}</Text>
        <Text>dsfisjdig: {numofque}</Text>
        <Text>dsfisjdig: {title}</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <Quecont que={item}></Quecont>}
        ></FlatList>

        <Link style={styles.genque} href="/Quizconformationpage">
          Submit
        </Link>
      </Maincont>
    </Background>
  );
};
const styles = StyleSheet.create({
  submit: {
    margin: 20,
    borderWidth: 2,
    borderRadius: 10,
  },
  genque: {
    margin: 10,
    backgroundColor: "#0a335d",
    color: "white",
    padding: 10,
    borderRadius: 10,
  },
});
export default Quevalidation;
