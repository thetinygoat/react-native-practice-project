import * as actionTypes from "../actions/actionTypes";
const initialState = {
  places: [],
  selectedPlace: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          name: action.placeName,
          key: Math.random().toString(),
          image: {
            uri:
              "https://images.pexels.com/photos/1697306/pexels-photo-1697306.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          }
        })
      };
    case actionTypes.DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key != action.placeKey;
        }),
        selectedPlace: null
      };
    case actionTypes.DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    case actionTypes.SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.placeKey;
        })
      };
    default:
      return state;
  }
};
