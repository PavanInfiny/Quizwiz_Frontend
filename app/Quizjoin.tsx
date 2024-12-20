import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import Background from "@/components/Background";
import Smalllogo from "@/components/Smalllogo";
import Maincont from "@/components/Maincont";
import Footernav from "@/components/Footernav";
import { Link } from "expo-router";

const Quizjoin = () => {
  const [quizid, setquizid] = useState(0);
  const [name, setname] = useState("");
  const [usn, setusn] = useState("");
  return (
    <Background>
      <Smalllogo></Smalllogo>
      <Maincont>
        <View style={{ height: "50%", width: "100%" }}>
          <View style={styles.maincont}>
            <View style={styles.input}>
              <TextInput
                placeholder="Quiz Id"
                onChangeText={(text) => {
                  let temp = Number(text);
                  setquizid(temp);
                }}
              ></TextInput>
            </View>
            <View style={styles.input}>
              <TextInput
                placeholder="Name"
                onChangeText={(item) => {
                  setname(item);
                }}
              ></TextInput>
            </View>
            <View style={styles.input}>
              <TextInput
                placeholder="USN"
                onChangeText={(item) => {
                  setusn(item);
                }}
              ></TextInput>
            </View>
            <View style={{ alignSelf: "center", borderRadius: 10 }}>
              <Link
                href={{
                  pathname: "/Mainquiz",
                  params: { quizid: quizid, name: name, usn: usn },
                }}
              >
                <Text
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  Join
                </Text>
              </Link>
            </View>
          </View>
        </View>
      </Maincont>
    </Background>
  );
};
const styles = StyleSheet.create({
  maincont: {
    margin: 30,
    borderWidth: 2,
    borderRadius: 20,
    flex: 1,
    padding: 30,
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    paddingBottom: 5,
    margin: 10,
  },
});

export default Quizjoin;
