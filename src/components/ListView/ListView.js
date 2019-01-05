import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ListItem from "../ListItem/ListItem";

export default function ListView(props) {
  return (
    <FlatList
      style={styles.listViewContainer}
      data={props.items}
      renderItem={info => (
        <ListItem
          value={info.item.name}
          handleSelect={() => props.handleSelect(info.item.key)}
          image={info.item.image}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  listViewContainer: {
    width: "100%"
  }
});
