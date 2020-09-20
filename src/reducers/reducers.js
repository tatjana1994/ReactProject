import { UPDATE_INFO } from "../action-types/index";
import { UPDATE_GLOBE_COORDS } from "../action-types/index";
import { UPDATE_MAP_COORDS } from "../action-types/index";

let defaultState = {
  name: "",
  age: "",
  countries: [],
  gender: "",
  countryIds: [],
  namePopularity: [],
  globeCoords: [0, 0],
  mapCoords: [0, 0],
};

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_INFO: {
      return {
        ...state,
        name: action.name,
        age: action.age,
        countries: action.countries,
        gender: action.gender,
        countryIds: action.countryIds,
        namePopularity: action.namePopularity,
      };
    }
    case UPDATE_GLOBE_COORDS: {
      return {
        ...state,
        globeCoords: action.globeCoords,
      };
    }
    case UPDATE_MAP_COORDS: {
      return {
        ...state,
        mapCoords: action.mapCoords,
      };
    }
    default:
      return state;
  }
};

export default mainReducer;
