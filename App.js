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
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

type Props = {};
export default class App extends Component<Props> {
  state = {
    value: "",
    places: []
  };
  handleTyping = value => {
    this.setState({
      ...this.state,
      value: value,
      selectedPlace: null
    });
  };
  handleSubmit = () => {
    this.setState(state => {
      return {
        places: state.places.concat({
          name: state.value,
          key: Math.random().toString(),
          image: {
            uri:
              "https://images.pexels.com/photos/1697306/pexels-photo-1697306.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          }
        })
      };
    });
  };
  handleSelect = key => {
    this.setState(state => {
      return {
        selectedPlace: state.places.find(place => {
          return place.key === key;
        })
      };
    });
    // this.setState(state => {
    //   return {
    //     places: state.places.filter(place => {
    //       return place.key != key;
    //     })
    //   };
    // });
  };
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.selectedPlace} />
        <PlaceInput
          handleTyping={this.handleTyping}
          handleSubmit={this.handleSubmit}
        />
        <ListView items={this.state.places} handleSelect={this.handleSelect} />
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
