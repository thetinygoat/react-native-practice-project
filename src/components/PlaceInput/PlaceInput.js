import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
export default function(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeinput}
        onChangeText={props.handleTyping}
        value={props.value}
      />
      <Button
        title="Add"
        style={styles.placeButton}
        onPress={props.handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  placeinput: {
    width: "65%",
    borderColor: "black",
    borderWidth: 1,
    marginRight: 10
  },
  placeButton: {
    width: "30%"
  },
  inputContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  }
});
