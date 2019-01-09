import React from "react";
import {
  Text,
  View,
  Button,
  Modal,
  Image,
  StyleSheet,
  TouchableNativeFeedback
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

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
        <TouchableNativeFeedback onPress={props.handleDelete}>
          <View style={styles.deleteButton}>
            <Icon size={30} name="delete" color="red" />
          </View>
        </TouchableNativeFeedback>
        <Button title="Cancel" onPress={props.handleModalClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  placeInfoContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  deleteButton: {
    alignItems: "center"
  }
});

export default placeDetail;
