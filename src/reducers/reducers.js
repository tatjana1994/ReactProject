let defaultState = {
  name: "",
  age: "",
  countries: "",
  gender: "",
};

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "NEW_DATA": {
      return {
        name: action.name,
        age: action.age,
        countries: action.countries,
        gender: action.gender,
      };
    }
    default:
      return state;
  }
};

export default mainReducer;
