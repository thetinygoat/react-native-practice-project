import * as actionTypes from "./actionTypes";
export function addPlace(placeName) {
  return {
    type: actionTypes.ADD_PLACE,
    placeName: placeName
  };
}
export function deletePlace(key) {
  console.log(placeKey);
  return {
    type: actionTypes.DELETE_PLACE,
    placeKey: key
  };
}
export function selectPlace(key) {
  return {
    type: actionTypes.SELECT_PLACE,
    placeKey: key
  };
}
export function deselectPlace() {
  return {
    type: actionTypes.DESELECT_PLACE
  };
}
