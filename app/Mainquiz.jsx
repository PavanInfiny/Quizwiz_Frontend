import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { API_BASE_URL } from '@env';
import React, { useEffect, useState } from "react";
import Background from "@/components/Background";
import Smalllogo from "@/components/Smalllogo";
import Quizsubmitted from "@/components/Quizsubmitted";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
const Mainquiz = () => {
  const {quizid,name,usn}=useLocalSearchParams();
  const[loading,setloading]=useState(true);
  const[data,setdata]=useState([])
  const[ary,setary]=useState([])
  // console.log("quizid :",quizid)
  const getdetails = async () => {
    try {
      // console.log("inside details");
      console.log(API_BASE_URL)
      console.log(`${API_BASE_URL}takequiz/${quizid}`)
      const response = await fetch(`${API_BASE_URL}takequiz/${quizid}`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json(); // Parse JSON response
      let no=0;
      let temp=result.map((i)=>{
        no++;
        return {...i,marked: "",selected: 0,questionnum: no};
      })
      setdata(temp);
      // console.log("data :",data); // Set data to state
      setloading(false)
    } catch (err) {
      console.log(err);
    } finally {
    }
  };
  useEffect(() => {
      console.log("useEffect triggered");
      getdetails();
    }, []);

  // const data = [
    // {
    //   question: "What is the capital of France?",
    //   questionnum: 2,
    //   option1: "Berlin",
    //   option2: "Madrid",
    //   option3: "Paris",
    //   option4: "Rome",
    //   queid: 2,
    //   selected: 0,
    //   answer: "Paris",
    //   marked: "",
    // },
    // {
    //   question: "What is the capital of France?",
    //   questionnum: 3,
    //   option1: "Berlin",
    //   option2: "Madrid",
    //   option3: "Paris",
    //   option4: "Rome",
    //   queid: 3,
    //   selected: 0,
    //   answer: "Paris",
    //   marked: "",
    // },
    // {
    //   question: "What is the capital of France?",
    //   questionnum: 4,
    //   option1: "Berlin",
    //   option2: "Madrid",
    //   option3: "Paris",
    //   option4: "Rome",
    //   queid: 4,
    //   selected: 0,
    //   answer: "Paris",
    //   marked: "",
    // },
    // {
    //   question: "What is the capital of France?",
    //   questionnum: 5,
    //   option1: "Berlin",
    //   option2: "Madrid",
    //   option3: "Paris",
    //   option4: "Rome",
    //   queid: 5,
    //   selected: 0,
    //   answer: "Paris",
    //   marked: "",
    // },
    // {
    //   question: "What is the capital of France?",
    //   questionnum: 6,
    //   option1: "Berlin",
    //   option2: "Madrid",
    //   option3: "Paris",
    //   option4: "Rome",
    //   queid: 6,
    //   selected: 0,
    //   answer: "Paris",
    //   marked: "",
    // },
    // {
    //   question: "What is the capital of France?",
    //   questionnum: 7,
    //   option1: "Berlin",
    //   option2: "Madrid",
    //   option3: "Paris",
    //   option4: "Rome",
    //   queid: 7,
    //   selected: 0,
    //   answer: "Paris",
    //   marked: "",
    // },
    // {
    //   question: "What is the capital of France?",
    //   questionnum: 8,
    //   option1: "Berlin",
    //   option2: "Madrid",
    //   option3: "Paris",
    //   option4: "Rome",
    //   queid: 8,
    //   selected: 0,
    //   answer: "Paris",
    //   marked: "",
    // },
  // ];

  const [submit, setsubmit] = useState(true);
  const [array, setarray] = useState(data);
  const [score, setscore] = useState(0);
  let max=data.length;
  // let arr = [];
  // for (let i = 0; i < data.length; i++) {
  //   let obj = {
  //     queid: data[i].queid,
  //     queoptselected: 1,
  //   };
  //   arr[i] = obj;
  // }
  const onsubmipress = () => {
    let temp = 0;
    data.map((i) => {
      // console.log(i.selected);
      if (i.marked === i.answer) {
        console.log(i.questionnum);
        temp++;
      }
    });
    
    setscore(temp);
    console.log("score", temp);
    setsubmit(false);
    console.log("submitted");
  };
  const press = (optno, num) => {
    console.log("num :",num);
    const temp = data.map((item) => {
      if (item.queid === num) {
        let choice;
        switch (optno) {
          case 1:
            choice = item.option1;
            break;
          case 2:
            choice = item.option2;
            break;
          case 3:
            choice = item.option3;
            break;
          case 4:
            choice = item.option4;
            break;
        }

        return { ...item, selected: optno, marked: choice };
      }
      console.log("item :",data)
      return item;
    });

    console.log(temp);
    setdata(temp);
  };
  if(loading){
    return(
    <Background>
      <Smalllogo></Smalllogo>
      <Text>Loading</Text>
    </Background>
    )
  }
  if(submit)
    return (
      <Background>
        <Smalllogo></Smalllogo>
        <View style={styles.time}>
          <Text>00:00:00</Text>
        </View>
        <View style={{ width: "80%", height: "10%" }}>
          <View style={styles.details}>
            <View style={styles.subdetails}>
              <Text>Quizid : {quizid}</Text>
              <Text>Name : {name}</Text>
              <Text>User id : {usn}</Text>
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
            data={data}
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
                      <Text>{item.option1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={
                        item.selected === 2 ? styles.clicked : styles.singleopt
                      }
                      onPress={() => press(2, item.queid)}
                    >
                      <Text>{item.option2}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={
                        item.selected === 3 ? styles.clicked : styles.singleopt
                      }
                      onPress={() => press(3, item.queid)}
                    >
                      <Text>{item.option3}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={
                        item.selected === 4 ? styles.clicked : styles.singleopt
                      }
                      onPress={() => press(4, item.queid)}
                    >
                      <Text>{item.option4}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}
          ></FlatList>
        </View>
        <TouchableOpacity onPress={() => onsubmipress()} style={styles.submit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </Background>
    );
  return <Quizsubmitted score={score} max={data.length} quizid={quizid} userid={usn}></Quizsubmitted>;
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
