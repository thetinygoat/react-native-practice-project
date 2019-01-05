import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Image
} from "react-native";

export default function ListItem(props) {
  return (
    <TouchableNativeFeedback onPress={props.handleSelect}>
      <View style={styles.listItem}>
        <Image source={props.image} style={styles.image} />
        <Text>{props.value}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#efefef",
    padding: 10,
    margin: 5,
    flexDirection: "row"
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
    alignItems: "center"
  }
});
