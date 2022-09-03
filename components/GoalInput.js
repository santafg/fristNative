import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React from "react";

const GoalInput = ({ inputData }) => {
  const { enteredGoalText, setEnteredGoalText, courseGoals, setCourseGoals } =
    inputData;
  const handleGoalInput = (enteredText) => {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  };
  const handleAddGoal = () => {
    // console.log("goal", enteredGoalText);
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoalText]);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={handleGoalInput}
      />
      <Button title="ADD GOAL" onPress={handleAddGoal} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    width: "74%",
    // marginRight : 10,
    padding: 4,
  },
});
