import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";

const BIglogo = () => {
  return (
    <View style={styles.Biglogo}>
      <Image
        style={styles.logoimg}
        source={require("@/assets/images/quizwizlogo.png")}
        resizeMode="cover"
      ></Image>
    </View>
  );
};
const styles = StyleSheet.create({
  Biglogo: {
    height: 100,
    width: "80%",
    marginTop: "15%",
  },
  logoimg: {
    height: "100%",
    width: "100%",
  },
});

export default BIglogo;
