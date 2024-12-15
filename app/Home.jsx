import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Footernav from "../components/Footernav";
import BIglogo from "../components/BIglogo";
import Background from "../components/Background";
import { Link } from "expo-router";
const Home = () => {
  return (
    <>
      <Background>
        <BIglogo></BIglogo>
        <View style={styles.Homeiconcont}>
          <Link href="/Quizcreate" style={styles.Clickablecont}>
            <View style={styles.createcont}>
              <View style={styles.createicon}>
                <Image
                  source={require("@/assets/images/create.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 20,
                  }}
                  // resizeMode="cover"
                ></Image>
              </View>

              <View>
                <Text style={styles.createhead}>Create Quiz</Text>
              </View>
            </View>
          </Link>
          <Link href="/Quizjoin" style={styles.Clickablecont}>
            <View style={styles.createcont}>
              <View style={styles.createicon}>
                <Image
                  source={require("@/assets/images/join.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 20,
                  }}
                  // resizeMode="cover"
                ></Image>
              </View>

              <View>
                <Text style={styles.createhead}>Join Quiz</Text>
              </View>
            </View>
          </Link>
        </View>
        <Footernav></Footernav>
      </Background>
    </>
  )
}
const styles = StyleSheet.create({
  Homepagecont: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  Homeiconcont: {
    width: "80%",
    height: 400,
    marginTop: "20%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    
    // borderWidth:2
  },
  
  Clickablecont: {
    width: "90%",
    height: 150,
    borderRadius: 20,
    margin: 20,
    borderStyle: "solid",
    borderColor: "black",
    // borderWidth: 5,
    boxShadow: "inset 0 0 20",
    backgroundColor: "#49688d80",

  },
  createcont: {
    height: "100%",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 0,
    justifyContent: "space-around",
    // borderWidth:3
   
  },
  createicon: {
    width: "40%",
    height: "70%",
  },
  createhead: {
    width: "100%",
    borderRadius: 20,
    fontSize: 25,
    color: "white",
    alignItems: "flex-start",
    // margin
  },
});
export default Home