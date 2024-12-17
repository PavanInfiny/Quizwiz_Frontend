import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Quecont = (props) => {
  const que = props.que;
  return (
    <View style={styles.quizcont}>
      <Text>
        {que.question}
      </Text>
      <View style={styles.optcont}>
        <Text>
          {que.option1}
        </Text>
        <Text>
          {que.option2}
        </Text>
        <Text>
          {que.option3}
        </Text>
        <Text>
          {que.option4}
        </Text>
      </View>
      
        <Image source={require("@/assets/images/delete.png")} style={styles.deletebutton}></Image>
      
    </View>
  );
};
const styles = StyleSheet.create({
  quizcont: {
    padding:20,
    marginTop: 30,
    width: 350,
    flex: 1,
    flexDirection: "column",
    // borderWidth: 1,
    backgroundColor:"#bddaec",
    borderRadius:20
  },
  quecont: {},
  optcont: {
    marginHorizontal:10,
    marginVertical:10,
  },
  singleoptcont: {},
  deletebutton:{
    position:"absolute",
    width:40,
    height:40,
    top:0,
    right:0,
    
  },
});
export default Quecont;
