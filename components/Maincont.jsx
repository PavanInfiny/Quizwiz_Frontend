import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Maincont = ({children}) => {
  return (
    <View style={styles.maincont}>
        {children}
    </View>
  )
}
const styles=StyleSheet.create({
  maincont: {
    width: "100%",
    height: "97%",
    // borderWidth: 2,
    // marginTop: "10%",
    paddingTop:10,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
})

export default Maincont