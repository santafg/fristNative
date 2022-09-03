// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import First from "./learn/First";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const handleGoalInput = (enteredText) => {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  };
  const handleAddGoal = () => {
    // console.log("goal", enteredGoalText);
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoalText]);
  };

  const handleDeleteGoal = (index) => {
    console.log("delete", index);
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal, id) => id != index)
    );
  };

  return (
    <>
      {/* <First /> */}
      <View style={styles.appContainer}>
        <GoalInput
          inputData={{
            enteredGoalText,
            setEnteredGoalText,
            courseGoals,
            setCourseGoals,
          }}
        />
        <View style={styles.goalsContainer}>
          {/* <ScrollView>
            {courseGoals.map((goal, i) => (
              <View style={styles.goalItem} key={i}>
                <Text style={{ color: "white" }}>{goal}</Text>
              </View>
            ))}
          </ScrollView> */}
          <FlatList
            data={courseGoals}
            renderItem={({ item, index }) => (
              <GoalItem
                item={item}
                index={index}
                handleDeleteGoal={handleDeleteGoal}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 6,
  },
  goalItem: {
    backgroundColor: "purple",
    borderRadius: 5,
    padding: 8,
    margin: 6,
    color: "white",
  },
});
