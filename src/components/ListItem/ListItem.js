import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

export default function ListItem(props) {
  return (
    <TouchableNativeFeedback onPress={props.handleDelete}>
      <View style={styles.listItem}>
        <Text>{props.value}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#efefef",
    padding: 10,
    margin: 5
  }
});
