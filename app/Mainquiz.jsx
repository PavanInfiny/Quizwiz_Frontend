import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Background from "@/components/Background";
import Smalllogo from "@/components/Smalllogo";
import Quizsubmitted from"@/components/Quizsubmitted";
const Mainquiz = () => {
  const data = [
    {
      question: "What is the capital of France?",
      questionnum: 1,
      opt1: "Berlin",
      opt2: "Madrid",
      opt3: "Paris",
      opt4: "Rome",
      queid: 1,
      selected: 0,
      answer: "Paris",
      marked: "",
    },
    {
      question: "What is the capital of France?",
      questionnum: 1,
      opt1: "Berlin",
      opt2: "Madrid",
      opt3: "Paris",
      opt4: "Rome",
      queid: 1,
      selected: 0,
      answer: "Paris",
      marked: "",
    },
    {
      question: "What is the capital of France?",
      questionnum: 2,
      opt1: "Berlin",
      opt2: "Madrid",
      opt3: "Paris",
      opt4: "Rome",
      queid: 2,
      selected: 0,
      answer: "Paris",
      marked: "",
    },
    {
      question: "What is the capital of France?",
      questionnum: 3,
      opt1: "Berlin",
      opt2: "Madrid",
      opt3: "Paris",
      opt4: "Rome",
      queid: 3,
      selected: 0,
      answer: "Paris",
      marked: "",
    },
    {
      question: "What is the capital of France?",
      questionnum: 4,
      opt1: "Berlin",
      opt2: "Madrid",
      opt3: "Paris",
      opt4: "Rome",
      queid: 4,
      selected: 0,
      answer: "Paris",
      marked: "",
    },
    {
      question: "What is the capital of France?",
      questionnum: 5,
      opt1: "Berlin",
      opt2: "Madrid",
      opt3: "Paris",
      opt4: "Rome",
      queid: 5,
      selected: 0,
      answer: "Paris",
      marked: "",
    },
    {
      question: "What is the capital of France?",
      questionnum: 6,
      opt1: "Berlin",
      opt2: "Madrid",
      opt3: "Paris",
      opt4: "Rome",
      queid: 6,
      selected: 0,
      answerwer: "Paris",
      marked: "",
    },
    {
      question: "What is the capital of France?",
      questionnum: 7,
      opt1: "Berlin",
      opt2: "Madrid",
      opt3: "Paris",
      opt4: "Rome",
      queid: 7,
      selected: 0,
      answer: "Paris",
      marked: "",
    },
    {
      question: "What is the capital of France?",
      questionnum: 8,
      opt1: "Berlin",
      opt2: "Madrid",
      opt3: "Paris",
      opt4: "Rome",
      queid: 8,
      selected: 0,
      answer: "Paris",
      marked: "",
    },
  ];
  const [submit,setsubmit]=useState(true);
  const [array, setarray] = useState(data);

  let arr = [];
  for (let i = 0; i < data.length; i++) {
    let obj = {
      queid: data[i].queid,
      queoptselected: 1,
    };
    arr[i] = obj;
  }
 
  const press = (optno, num) => {
    console.log(num);
    const temp = array.map((item) => {
      if (item.queid === num) {
        let choice;
        switch(optno){
          case 1: 
          choice=item.opt1;
          break;
          case 2: 
          choice=item.opt2;
          break;
          case 3: 
          choice=item.opt3;
          break;
          case 4: 
          choice=item.opt4;
          break;
        }
        return { ...item, selected: optno ,marked:choice};
      }
      return item;
    });
 
    console.log(temp);
    setarray(temp);
  };
  // const submitpress()=>{
  //   console.log("submitted");
  //   // let score=0;
  //   // array.map(i=>{
  //   //   if(i.selected===i.answer){
  //   //     score++;
  //   //   }
  //   // });
  //   // console.log(score);
  // }
  const onsubmit=()=>{
    console.log("submitted");
  };
  if(submit)return (
    <Background>
      <Smalllogo></Smalllogo>
      <View style={styles.time}>
        <Text>00:00:00</Text>
      </View>
      <View style={{ width: "80%", height: "10%" }}>
        <View style={styles.details}>
          <View style={styles.subdetails}>
            <Text>Quizid : </Text>
            <Text>QuizName : </Text>
            <Text>Questions : </Text>
          </View>
          <View style={styles.subdetails}>
            <Text>Duration : </Text>
            <Text>Attemted : </Text>
            <Text>Skipped : </Text>
          </View>
        </View>
      </View>
      <View style={styles.quiz}>
        <FlatList
          data={array}
          keyExtractor={(item) => item.queid}
          renderItem={({ item }) => (
            <>
              <View style={styles.container}>
                <View style={styles.question}>
                  <View style={styles.quenum}>
                    <Text style={{ width: 10 }}>
                      <>{item.questionnum}</>
                    </Text>
                  </View>
                  <View style={styles.que}>
                    <Text style={styles.border}>{item.question}</Text>
                  </View>
                </View>
                <View style={styles.Option}>
                  <TouchableOpacity
                    style={
                      item.selected === 1 ? styles.clicked : styles.singleopt
                    }
                    onPress={() => press(1, item.queid)}
                  >
                    <Text>{item.opt1}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      item.selected === 2 ? styles.clicked : styles.singleopt
                    }
                    onPress={() => press(2, item.queid)}
                  >
                    <Text>{item.opt2}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      item.selected === 3 ? styles.clicked : styles.singleopt
                    }
                    onPress={() => press(3, item.queid)}
                  >
                    <Text>{item.opt3}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      item.selected === 4 ? styles.clicked : styles.singleopt
                    }
                    onPress={() => press(4, item.queid)}
                  >
                    <Text>{item.opt4}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        ></FlatList>
      </View>
      <TouchableOpacity onPress={()=>onsubmit} style={styles.submit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </Background>
  );
  return(
    <Background>
      <Smalllogo>
      </Smalllogo>
      <Quizsubmitted></Quizsubmitted>
    </Background>
  );

};
const styles = StyleSheet.create({
  time: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  details: {
    marginVertical: 5,
    borderRadius: 10,
    borderRadius: 20,
    backgroundColor: "#e39f9a50",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  subdetails: {
    // borderWidth:1,
    width: "40%",
    height: "80%",
  },
  quiz: {
    width: "95%",
    flex: 1,
    padding: 10,
    // borderWidth:1,
  },
  border: {
    // borderWidth: 1,
    borderColor: "black",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    // borderWidth: 1,
    margin: 2,
    // height: 50,
  },
  question: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 15,
  },
  que: {
    // borderWidth: 1,
    marginLeft: 5,
  },
  quenum: {
    fontSize: 3,
  },
  Option: {
    marginLeft: 30,
    // borderWidth: 1,
    marginRight: 30,
  },
  singleopt: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#49688d40",
    borderRadius: 10,
    paddingLeft: 20,
  },
  clicked: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#49688d40",
    borderRadius: 10,
    paddingLeft: 20,
    borderWidth: 3,
  },
  submit: {
    // width: 60,
    // height: 20,
    // borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    margin: 10,
    backgroundColor: "lightblue",
  },
});

export default Mainquiz;
