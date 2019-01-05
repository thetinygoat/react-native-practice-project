import React from "react";
import { Text, View, Button, Modal, Image } from "react-native";

const placeDetail = props => {
  let placeinfo = null;
  if (props.selectedPlace) {
    placeinfo = (
      <View>
        <Image source={props.selectedPlace.image} />
        <Text>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal visible={props.selectedPlace !== null}>
      {placeinfo}
      <View>
        <Button title="Delete" color="red" />
        <Button title="Cancel" />
      </View>
    </Modal>
  );
};

export default placeDetail;
