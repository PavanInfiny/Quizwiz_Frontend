import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Touchable,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import Background from "@/components/Background";
import Smalllogo from "@/components/Smalllogo";
import Maincont from "@/components/Maincont";
import Participatedquiz from "@/components/Participatedquiz";
import Createdquiz from "@/components/Createdquiz";
import Footernav from "@/components/Footernav";
import { Link } from "expo-router";
import { API_BASE_URL } from "@env";
const History = () => {
  const [toogle, settoggle] = useState(true);
  const [loading, setloading] = useState(true);
  const [userid, setuserid] = useState(0);
  const [load, setload] = useState(true);
  const [participantdata, setparticipantdata] = useState([]);
  const [creatordata, setcreatordata] = useState([]);
  const getpdetails = async () => {
    try {
      console.log("user id :", userid);
      const prefix = userid + "";
      console.log(`${API_BASE_URL}getpartipateddetails/${userid}`);
      const response = await fetch(
        `${API_BASE_URL}getpartipateddetails/${prefix}`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json(); // Parse JSON response
      console.log("data :", result);
      setparticipantdata(result);
      // Set data to state
    } catch (err) {
      console.log(err);
    } finally {
    }
  };
  const getcdetails = async () => {
    try {
      console.log("user id :", userid);
      console.log(`${API_BASE_URL}getpartipateddetails/${userid}`);
      const response = await fetch(
        `${API_BASE_URL}getcreateddetails/${userid}`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json(); // Parse JSON response
      console.log("data :", result);
      setcreatordata(result);
      // Set data to state
      setloading(false);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };
  useEffect(() => {
    console.log("useEffect triggered");
    getpdetails();
  }, []);
  useEffect(() => {
    console.log("useEffect triggered");
    getcdetails();
  }, []);
  useEffect(() => console.log("toogled"), []);
  const ontouch = (flag) => {
    settoggle(flag);
    console.log("clicked");
  };
  if (load) {
    return (
      <Background>
        <Smalllogo></Smalllogo>
        <TextInput
          placeholder="Enter Your Userid"
          onChangeText={(value) => {
            const temp = parseInt(value);

            setuserid(temp);
          }}
          c
          style={{ borderBottomWidth: 0.5, marginVertical: 30 }}
        ></TextInput>
        <View
          onTouchEnd={() => {
            getpdetails();
            getcdetails();
            setload(false);
          }}
        >
          <Text
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: 10,
              borderRadius: 5,
            }}
          >
            submit
          </Text>
        </View>
      </Background>
    );
  }
  if (loading) {
    return (
      <>
        <Background>
          <Smalllogo></Smalllogo>
          <Text>loading</Text>
        </Background>
      </>
    );
  }
  return (
    <Background>
      <Smalllogo></Smalllogo>
      <Maincont>
        <View style={{ width: "80%", height: "5%" }}>
          <View style={styles.togglecont}>
            <View
              style={toogle ? styles.clicked : styles.unclicked}
              onTouchStart={() => ontouch(true)}
            >
              <Text style={toogle && { color: "white" }}>Created Quiz</Text>
            </View>
            <View
              style={toogle ? styles.unclicked : styles.clicked}
              onTouchStart={() => ontouch(false)}
            >
              <Text style={!toogle && { color: "white" }}>
                Participated quiz
              </Text>
            </View>
          </View>
        </View>
        {toogle ? (
          <Createdquiz data={creatordata}></Createdquiz>
        ) : (
          <Participatedquiz data={participantdata}></Participatedquiz>
        )}
        <Footernav></Footernav>
      </Maincont>
    </Background>
  );
};
const styles = StyleSheet.create({
  togglecont: {
    borderWidth: 0.5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // padding:10,
    borderRadius: 15,
    // backgroundColor:"black",
  },
  unclicked: {
    width: "30%",
    height: 25,
    borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    // marginRight:10,
    marginVertical: 5,
    borderRadius: 10,
  },
  clicked: {
    width: "30%",
    height: 25,
    borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#6c95c6",
  },
});

export default History;
