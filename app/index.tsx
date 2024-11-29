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
import Background from "@/app/(tabs)/Background";
import Footernav from "./(tabs)/Footernav";
import BIglogo from "./(tabs)/BIglogo";
export default function HomeScreen() {
  return (
    <>
      <Background>
       <BIglogo></BIglogo>
        <View style={styles.Homeiconcont}>
          <TouchableOpacity style={styles.createcont}>
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

            <View style={styles.createhead}>Create Quiz</View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createcont}>
            <View style={styles.createicon}>
              <Image
                source={require("@/assets/images/join.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 20,
                }}
              ></Image>
            </View>
            <View style={styles.createhead}>Join Quiz</View>
          </TouchableOpacity>
        </View>
        <Footernav></Footernav>
      </Background>
    </>
  );
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
    // borderColor: "black",
    // borderWidth: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  createcont: {
    width: "90%",
    height: 150,
    borderRadius: 20,
    margin: 20,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    boxShadow: "inset 0 0 20",
    backgroundColor: "#49688d",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    justifyContent: "space-between",
  },
  createicon: {
    width: "40%",
    height: "70%",
  },
  createhead: {
    width: "50%",
    borderRadius: 20,
    fontSize: 25,
    color: "white",

    // margin
  },
 
});
