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
import * as placeActions from "./src/store/actions/places";
import { connect } from "react-redux";

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          handleDelete={() => this.props.handleDelete(key)}
          handleModalClose={this.props.handleDeselect}
        />
        <PlaceInput handleSubmit={() => this.props.handleAdd(placename)} />
        <ListView
          items={this.props.places}
          handleSelect={() => this.props.handleSelect(key)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleAdd: placename => dispatch(placeActions.addPlace(placename)),
    handleDelete: key => dispatch(placeActions.deletePlace(key)),
    handleSelect: key => dispatch(placeActions.selectPlace(key)),
    handleDeselect: key => dispatch(placeActions.deselectPlace())
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center"
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
