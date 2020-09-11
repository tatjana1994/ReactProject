import { UPDATE_INFO } from "../action-types/index";

let defaultState = {
  name: "",
  age: "",
  countries: "",
  gender: "",
  countryIds: [],
  countryPopularity: [],
};

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_INFO: {
      return {
        name: action.name,
        age: action.age,
        countries: action.countries,
        gender: action.gender,
        countryIds: action.countryIds,
        countryPopularity: action.countryPopularity,
      };
    }
    default:
      return state;
  }
};

export default mainReducer;
