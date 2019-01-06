import { createStore, combineReducers } from "redux";

import placesReducuer from "./reducers/places";

const rootReducer = combineReducers({
  places: placesReducuer
});

const storeConfig = () => {
  return createStore(rootReducer);
};

export default storeConfig;
