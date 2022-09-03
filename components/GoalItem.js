import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const GoalItem = ({ item, index, handleDeleteGoal }) => {
//   console.log(index);
  return (
    <Pressable onPress={() => handleDeleteGoal(index)}>
      <View style={styles.goalItem}>
        <Text style={{ color: "white" }}>{item}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "purple",
    borderRadius: 5,
    padding: 8,
    margin: 6,
    color: "white",
  },
});
