/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import ListView from "./src/components/ListView/ListView";

type Props = {};
export default class App extends Component<Props> {
  state = {
    value: "",
    places: []
  };
  handleTyping = value => {
    this.setState({
      ...this.state,
      value: value
    });
  };
  handleSubmit = () => {
    this.setState(state => {
      return {
        places: state.places.concat({ value: state.value, key: Math.random() })
      };
    });
  };
  handleDelete = key => {
    this.setState(state => {
      return {
        places: state.places.filter(place => {
          return place.key != key;
        })
      };
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <PlaceInput
          handleTyping={this.handleTyping}
          handleSubmit={this.handleSubmit}
        />
        <ListView items={this.state.places} handleDelete={this.handleDelete} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center"
  }
});
