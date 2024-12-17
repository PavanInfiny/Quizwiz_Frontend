import {
  View,
  Text,
  StyleSheet,
  TextInputComponent,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Button,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import React, { useRef, useState } from "react";
import Background from "@/components/Background";
import Smalllogo from "@/components/Smalllogo";
import { Link } from "expo-router";
import Maincont from "@/components/Maincont";

// import Background from "../../components/ui/Background";

const Quizcreate = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [numofque, setNumOfQue] = useState("");
  return (
    <>
      <Background>
        <Smalllogo></Smalllogo>
        {/* <KeyboardAvoidingView> */}
        <Maincont>
          <TextInput
            placeholder="Enter The Text"
            style={styles.input}
            onChangeText={(value) => setText(value)}
          />
          <Text style={styles.ortext}>OR</Text>
          <Pressable style={styles.uploadcont}>
            <Text
              style={{
                fontSize: 25,
              }}
            >
              Upload Doc
            </Text>
          </Pressable>
          <View
            style={{
              height: "30%",
              width: "80%",
              // borderWidth: 2,
              margin: 10,
            }}
          >
            <View style={styles.entrycont}>
              <View style={styles.subenterycont}>
                <Text
                  style={{
                    fontSize: 12,
                    // borderWidth: 1,
                    // width: "30%",
                    // height:"10%",
                  }}
                >
                  Quiz Title :
                </Text>
                <TextInput style={styles.Titlecont} onChangeText={(value) => setTitle(value)}></TextInput>
              </View>
              <View style={styles.subenterycont}>
                <Text
                  style={{
                    fontSize: 12,
                    // borderWidth: 1,

                    // width: "40%",
                    // height:"10%",
                  }}
                >
                  Question Type :
                </Text>
                {/* <Picker></Picker> */}
                {/* <DropDownPicker style={{
                borderWidth:0,
                // width:"60%",
                marginLeft:10,
                
              }}></DropDownPicker> */}
              </View>
              <View style={styles.subenterycont}>
                <Text
                  style={{
                    fontSize: 12,
                    // borderWidth: 1,
                    // width: "70%",
                    // height:"10%",
                    // alignSelf:"stretch"
                  }}
                >
                  Number Of Question :
                </Text>
                <TextInput
                  keyboardType="numeric"
                  style={styles.Titlecont}
                  onChangeText={(value) => setNumOfQue(value)}
                ></TextInput>
              </View>
            </View>
          </View>
          <View>
            <Link
              href={{
                pathname: "/Quevalidation",
                params: { title: title, text: text, numofque: numofque },
              }}
              style={styles.genque}
            >
              Generate Questions
            </Link>
          </View>
        </Maincont>

        {/* </KeyboardAvoidingView> */}
      </Background>
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    height: "30%",
    width: "80%",
    // borderWidth:3,
    backgroundColor: "#2196f327",
    borderRadius: 30,
    boxShadow: "0 0 2 2",
    padding: 20,
    // marginTop:"50%"
  },
  ortext: {
    height: "3%",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  uploadcont: {
    height: "8%",
    padding: 10,
    backgroundColor: "#2196f327",
    borderRadius: 10,
  },
  entrycont: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    justifyContent: "space-between",
  },
  Titlecont: {
    marginLeft: 10,
    // height:"10%",
    borderBottomWidth: 0.5,
    width: 150,
    fontSize: 12,
  },
  subenterycont: {
    width: "80%",
    //  height:"10%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // borderWidth: 2,
  },
  questiontype: {},
  numofque: {},
  genque: {
    marginTop: 20,
    backgroundColor: "#0a335d",
    color: "white",
    padding: 10,
    borderRadius: 10,
  },
});
export default Quizcreate;
