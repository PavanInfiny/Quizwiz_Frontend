import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

const Background = ({children}) => {
  return (
    <View style={styles.Homepagecont}>
    <ImageBackground
      source={require("@/assets/images/backgroundimage.png")}
      style={styles.Homepagecont}
      resizeMode="cover" 
    >
      {children}
      </ImageBackground>
      </View>
  )
}
const styles = StyleSheet.create({
  Homepagecont: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    // borderWidth:2
  }
});
export default Background