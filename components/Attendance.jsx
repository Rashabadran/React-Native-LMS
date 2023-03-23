import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";



function Attendance({ navigation }) {


  return (
    
      <View style={styles.container}>
        <Text style={styles.title}>Attendance</Text>

      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    color: "#1e90ff",
  },
  
});

export default Attendance;