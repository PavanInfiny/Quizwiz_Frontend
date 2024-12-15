import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Participatedquizdetails from "./Participatedquizdetails";

const Participatedquiz = () => {
  const data = [
    {
      quiztitle: "phiysics",
      quizid: 1,
      createdon: "20/11/2024",
      score: 300 / 300,
    },
    {
      quiztitle: "phiysics",
      quizid: 1,
      createdon: "20/11/2024",
      score: 300 / 300,
    },
    {
      quiztitle: "phiysics",
      quizid: 1,
      createdon: "20/11/2024",
      score: 300 / 300,
    },
    {
      quiztitle: "phiysics",
      quizid: 1,
      createdon: "20/11/2024",
      score: 300 / 300,
    },
    {
      quiztitle: "phiysics",
      quizid: 1,
      createdon: "20/11/2024",
      score: 300 / 300,
    },
    {
      quiztitle: "phiysics",
      quizid: 1,
      createdon: "20/11/2024",
      score: 300 / 300,
    },
    {
      quiztitle: "phiysics",
      quizid: 1,
      createdon: "20/11/2024",
      score: 300 / 300,
    },
    {
      quiztitle: "phiysics",
      quizid: 1,
      createdon: "20/11/2024",
      score: 300 / 300,
    },
    {
      quiztitle: "phiysics",
      quizid: 1,
      createdon: "20/11/2024",
      score: 300 / 300,
    },
    {
      quiztitle: "phiysics",
      quizid: 1,
      createdon: "20/11/2024",
      score: 300 / 300,
    },
    {
      quiztitle: "phiysics",
      quizid: 1,
      createdon: "20/11/2024",
      score: 300 / 300,
    },
  ];
  return (
    <View style={styles.maincont}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Participatedquizdetails item={item}></Participatedquizdetails>}
      ></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  maincont: {
    width: "90%",
    // borderWidth:2,
    padding: 1,
    paddingVertical: 5,
    marginBottom: 120,
  },
});
export default Participatedquiz;
