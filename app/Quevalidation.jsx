import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Background from "@/components/Background";
import Smalllogo from "@/components/Smalllogo";
import Maincont from "@/components/Maincont";
import Quecont from "@/components/Quecont";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import Quizconformationpage from "@/components/Quizconformationpage";

const Quevalidation = () => {
  const [loading, setloading] = useState(true); /// change to false
  const { text, numofque, title ,userid} = useLocalSearchParams();
  const [load, setload] = useState(true);
  console.log("text:", text);
  console.log("numofque:", numofque);
  console.log("title", title);
  console.log("welcome");
  // const title = "cricket";
  // const navigation = useNavigation();
  const [data, setdata] = useState([
    // {
    //   answer: "b) The bill passed with a narrow majority.",
    //   option1: "a) The bill was rejected by a significant margin.",
    //   option2: "b) The bill passed with a narrow majority.",
    //   option3: "c) The bill passed with a unanimous vote.",
    //   option4: "d) The bill was tabled for further discussion.",
    //   queid: 92547,
    //   question:
    //     "What was the outcome of the vote on the 'one nation, one election' bill in Parliament?",
    //   quizid: 14022,
    // },

    // {
    //   answer: "c) The relatively narrow margin of victory.",
    //   option1: "a) The use of a simple majority vote.",
    //   option2: "b) The total number of MPs who voted.",
    //   option3: "c) The relatively narrow margin of victory.",
    //   option4: "d) The formal introduction process in Parliament.",
    //   queid: 90104,
    //   question:
    //     'What aspect of the "one nation, one election" bill\'s parliamentary passage did critics highlight as problematic?',
    //   quizid: 14022,
    // },
    // {
    //   answer: "b) A simple majority vote.",
    //   option1: "a) A unanimous vote of all MPs.",
    //   option2: "b) A simple majority vote.",
    //   option3: "c)two-thirds majority vote.",
    //   option4: "d) A referendum.",
    //   queid: 3643,
    //   question:
    //     'What action in Parliament formally initiated the legislative process for the "one nation, one election" bill?',
    //   quizid: 14022,
    // },
    // {
    //   answer: "",
    //   option1: "",
    //   option2: "",
    //   option3: "",
    //   option4: "",
    //   queid: 32823,
    //   question: "Unable to generate a valid question.",
    //   quizid: 14022,
    // },
    // {
    //   answer: "",
    //   option1: "",
    //   option2: "",
    //   option3: "",
    //   option4: "",
    //   queid: 68732,
    //   question: "Unable to generate a valid question.",
    //   quizid: 14022,
    // },
  ]);
  const deleteitem = (id) => {
    const newdata = data.filter((item) => item.queid != id);
    setdata(newdata);
  };
  const aftersubmit = () => {
    console.log("after submit");
    setloading(true);
    senddetails();
    data.map((i) => {
      sendmcqs(i);
    });

    setloading(false);
    setload(false);
  };
  const sendmcqs = async (i) => {
    try {
      console.log("inside mcqs");
      const response = await fetch("http://192.168.1.2:8181/addquizmcqs", {
        method: "POST", // Specify the method
        headers: {
          "Content-Type": "application/json", // Set the content type
        },
        body: JSON.stringify({
          answer: i.answer,
          option1:i.option1,
          option2: i.option2,
          option3: i.option3,
          option4: i.option4,
          queid: i.queid,
          question: i.question,
          quizid: i.quizid,
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
    }
  };
  const senddetails = async () => {
    try {
      console.log("inside details");
      const response = await fetch("http://192.168.1.2:8181/addquizdetail", {
        method: "POST", // Specify the method
        headers: {
          "Content-Type": "application/json", // Set the content type
        },
        body: JSON.stringify({
          quiztitle: title,
          quizid: data[0].quizid,
          numofque: data.length,
          userid:userid,
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
    }
  };
  const fetchData = async () => {
    try {
      console.log("inside try");
      const response = await fetch(
        "http://13.53.174.206:5000/generate-questions",
        {
          method: "POST", // Specify the method
          headers: {
            "Content-Type": "application/json", // Set the content type
          },
          body: JSON.stringify({
            text: text,
            num: numofque,
          }),
        }
      ); // API URL
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
  if (loading) {
    return (
      <Background>
        <Smalllogo></Smalllogo>
        <Text style={{ fontSize: 30, marginTop: "50%" }}>Loading</Text>
      </Background>
    );
  }
  if (load) {
    return (
      <Background>
        <Smalllogo></Smalllogo>
        <Maincont>
          <FlatList
            data={data}
            keyExtractor={(item) => item.quenumber}
            renderItem={({ item }) => (
              <Quecont que={item} deleteitem={deleteitem}></Quecont>
            )}
          ></FlatList>

          <View style={styles.genque} onTouchStart={() => aftersubmit()}>
            <Text style={{ color: "white" }}>Submit</Text>
          </View>
        </Maincont>
      </Background>
    );
  }

  return <Quizconformationpage data={data}></Quizconformationpage>;
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
