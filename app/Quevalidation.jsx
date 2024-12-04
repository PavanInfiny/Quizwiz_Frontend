import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import React from "react";
import Background from "@/components/Background";
import Smalllogo from "@/components/Smalllogo";
import Maincont from "@/components/Maincont";
import Quecont from "@/components/Quecont";
import { Link } from "expo-router";

const Quevalidation = () => {
  const data = [
    {
      question: "What is the capital of France?",
      questionnum: 1,
      opt1: "Berlin",
      opt2: "Madrid",
      opt3: "Paris",
      opt4: "Rome",
    },
    {
      question: "What is the capital of France?",
      questionnum: 1,
      opt1: "Berlin",
      opt2: "Madrid",
      opt3: "Paris",
      opt4: "Rome",
    },
    {
      question: "What is the capital of France?",
      questionnum: 1,
      opt1: "Berlin",
      opt2: "Madrid",
      opt3: "Paris",
      opt4: "Rome",
    },
    {
      question: "What is the capital of France?",
      questionnum: 1,
      opt1: "Berlin",
      opt2: "Madrid",
      opt3: "Paris",
      opt4: "Rome",
    },
    {
      question: "What is the capital of France?",
      questionnum: 1,
      opt1: "Berlin",
      opt2: "Madrid",
      opt3: "Paris",
      opt4: "Rome",
    },
    {
      question: "What is the capital of France?",
      questionnum: 1,
      opt1: "Berlin",
      opt2: "Madrid",
      opt3: "Paris",
      opt4: "Rome",
    },
    {
      question: "What is the capital of France?",
      questionnum: 1,
      opt1: "Berlin",
      opt2: "Madrid",
      opt3: "Paris",
      opt4: "Rome",
    },
    {
      question: "What is the capital of France?",
      questionnum: 1,
      opt1: "Berlin",
      opt2: "Madrid",
      opt3: "Paris",
      opt4: "Rome",
    },
  ];
  return (
    <Background>
      <Smalllogo></Smalllogo>
      <Maincont>
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
