import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import CreatedQuizdetails from "./CreatedQuizdetails";

const Createdquiz = (props) => {
  const data = props.data;
  //  [
  //   {
  //     quiztitle: "phiysics",
  //     quizid: 1,
  //     createdon: "20/11/2024",
  //     score: 300 / 300,
  //   },
  //   {
  //     quiztitle: "phiysics",
  //     quizid: 1,
  //     createdon: "20/11/2024",
  //     score: 300 / 300,
  //   },
  //   {
  //     quiztitle: "phiysics",
  //     quizid: 1,
  //     createdon: "20/11/2024",
  //     score: 300 / 300,
  //   },
  //   {
  //     quiztitle: "phiysics",
  //     quizid: 1,
  //     createdon: "20/11/2024",
  //     score: 300 / 300,
  //   },
  //   {
  //     quiztitle: "phiysics",
  //     quizid: 1,
  //     createdon: "20/11/2024",
  //     score: 300 / 300,
  //   },
  //   {
  //     quiztitle: "phiysics",
  //     quizid: 1,
  //     createdon: "20/11/2024",
  //     score: 300 / 300,
  //   },
  //   {
  //     quiztitle: "phiysics",
  //     quizid: 1,
  //     createdon: "20/11/2024",
  //     score: 300 / 300,
  //   },
  //   {
  //     quiztitle: "phiysics",
  //     quizid: 1,
  //     createdon: "20/11/2024",
  //     score: 300 / 300,
  //   },
  //   {
  //     quiztitle: "phiysics",
  //     quizid: 1,
  //     createdon: "20/11/2024",
  //     score: 300 / 300,
  //   },
  //   {
  //     quiztitle: "phiysics",
  //     quizid: 1,
  //     createdon: "20/11/2024",
  //     score: 300 / 300,
  //   },
  //   {
  //     quiztitle: "phiysics",
  //     quizid: 1,
  //     createdon: "20/11/2024",
  //     score: 300 / 300,
  //   },
  // ];
  return (
    <View style={styles.maincont}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CreatedQuizdetails item={item}></CreatedQuizdetails>
        )}
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
export default Createdquiz;
