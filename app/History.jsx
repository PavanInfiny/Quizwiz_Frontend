import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Touchable,
} from "react-native";
import React, { useEffect, useState } from "react";
import Background from "@/components/Background";
import Smalllogo from "@/components/Smalllogo";
import Maincont from "@/components/Maincont";
import Participatedquiz from "@/components/Participatedquiz";
import Createdquiz from "@/components/Createdquiz";
import Footernav from "@/components/Footernav";

const History = () => {
  const [toogle,settoggle]=useState("true");
  useEffect(()=>console.log("toogled"),[])
  const ontouch = (flag) => {
    settoggle(flag);
    console.log("clicked");
  };
  return (
    <Background>
      <Smalllogo></Smalllogo>
      <Maincont>
        <View style={{ width: "80%", height: "5%" }}>
          <View style={styles.togglecont}>
            <View style={(toogle)?styles.clicked:styles.tooglebuttoncont} onTouchStart={()=>ontouch(true)}>
              <Text style={toogle && {color:"white"}}>Created Quiz</Text>
            </View>
            <View style={(toogle)?styles.tooglebuttoncont:styles.clicked} onTouchStart={()=>ontouch(false)}>
              <Text style={!toogle && {color:"white"}}>Participated quiz</Text>
            </View>
          </View>
        </View>
        {(toogle) ?<Createdquiz></Createdquiz> :<Participatedquiz></Participatedquiz>}
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
    borderRadius:15,

  },
  tooglebuttoncont: {
    width: "30%",
    height: 25,
    borderWidth: 1,
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    margin:10,
    // marginRight:10,
    marginVertical:5,
    borderRadius:10,

  },
  clicked:{
    width: "30%",
    height: 25,
    borderWidth: 1,
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    margin:10,
    marginVertical:5,
    borderRadius:10,
    backgroundColor:"#6c95c6",
    color:"white"
  },
  unclicked:{

  }
});

export default History;
