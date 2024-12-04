import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Footernav = () => {
  return (
    <View style={styles.navbarcont}>
    <View style={styles.singlenav}>
      <Link href="/Home">
      <Image
        source={require("@/assets/images/home.png")}
        style={{
          height: "100%",
          width: "100%",
        }}
      ></Image>
      </Link>
    </View>
    <View style={styles.singlenav}>
    <Link href="/Profile">
      <Image
        source={require("@/assets/images/profile.png")}
        style={{
          height: "100%",
          width: "100%",
        }}
      ></Image>
      </Link>
    </View>
    <View style={styles.singlenav}>
    <Link href="/History">
      <Image
        source={require("@/assets/images/history.png")}
        style={{
          height: "100%",
          width: "100%",
        }}
      ></Image>
      </Link>
    </View>
  </View>
  )
}
const styles=StyleSheet.create({
  navbarcont: {
    height: "10%",
    width: "80%",
    // borderWidth: 4,
    marginBottom: 5,
    position: "absolute",
    bottom: -20,
    borderRadius: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow: "0 0 10 5",
    backgroundColor:"#6c95c6"
    // backgroundColor:"teal"
  },
  singlenav: {
    width: "8%",
    height: "40%",
    borderBottomWidth:4,
    paddingBottom:2
  },
})
export default Footernav