import React, { Component } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
class PlaceInput extends Component {
  state = {
    value: ""
  };
  onType = value => {
    this.setState({
      value: value
    });
  };
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeinput}
          onChangeText={this.onType}
          value={this.state.value}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={() => this.props.handleSubmit(this.state.value)}
        />
      </View>
    );
  }
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

export default PlaceInput;
