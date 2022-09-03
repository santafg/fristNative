import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const First = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.duppyText}>Another piece of text</Text>
      </View>
      <Text style={styles.duppyText}>Hello World</Text>
      <Button title="Tap me!" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  duppyText: {
    margin: 10,
    borderColor: "blue",
    borderWidth: 1,
    borderStyle: "dotted",
    padding: 10,
  },
});

export default First;
