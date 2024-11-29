import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Footernav = () => {
  return (
    <View style={styles.navbarcont}>
    <View style={styles.singlenav}>
      <Image
        source={require("@/assets/images/home.png")}
        style={{
          height: "100%",
          width: "100%",
        }}
      ></Image>
    </View>
    <View style={styles.singlenav}>
      <Image
        source={require("@/assets/images/profile.png")}
        style={{
          height: "100%",
          width: "100%",
        }}
      ></Image>
    </View>
    <View style={styles.singlenav}>
      <Image
        source={require("@/assets/images/settings.png")}
        style={{
          height: "100%",
          width: "100%",
        }}
      ></Image>
    </View>
  </View>
  )
}
const styles=StyleSheet.create({
  navbarcont: {
    height: "10%",
    width: "80%",
    borderWidth: 4,
    marginBottom: 5,
    position: "absolute",
    bottom: -20,
    borderRadius: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow: "10 10 20 20",
    // backgroundColor:"teal"
  },
  singlenav: {
    width: "15%",
    height: "60%",

    // borderWidth: 2,
  },
})
export default Footernav