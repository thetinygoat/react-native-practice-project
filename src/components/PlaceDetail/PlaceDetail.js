import React from "react";
import { Text, View, Button, Modal, Image, StyleSheet } from "react-native";

const placeDetail = props => {
  let placeinfo = null;
  if (props.selectedPlace) {
    placeinfo = (
      <View style={styles.placeInfoContainer}>
        <Image
          source={props.selectedPlace.image}
          style={{ width: "90%", height: 150 }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>
          {props.selectedPlace.name}
        </Text>
      </View>
    );
  }
  return (
    <Modal
      visible={props.selectedPlace !== null}
      animationType="slide"
      onRequestClose={props.handleModalClose}
    >
      {placeinfo}
      <View>
        <Button title="Delete" color="red" onPress={props.handleDelete} />
        <Button title="Cancel" onPress={props.handleModalClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  placeInfoContainer: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default placeDetail;
