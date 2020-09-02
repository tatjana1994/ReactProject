import axios from "axios";
import dataValidator from "./dataValidator";

export function loadName() {
  let input = document.getElementById("input-id").value;

  if (input) {
    let nationalize = "https://api.nationalize.io/?name=" + input;
    let agify = "https://api.agify.io/?name=" + input;
    let genderize = "https://api.genderize.io/?name=" + input;

    let requestNacionalize = axios.get(nationalize);
    let requestAgify = axios.get(agify);
    let requestGenderize = axios.get(genderize);

    return (dispatch) => {
      return axios
        .all([requestNacionalize, requestAgify, requestGenderize])
        .then(
          axios.spread((...responses) => {
            const nacionalizeData = responses[0];
            const agifyData = responses[1];
            const genderizeData = responses[2];

            dispatch(
              dataValidator(
                nacionalizeData.data.name,
                nacionalizeData.data.country,
                agifyData.data.age,
                genderizeData.data.gender
              )
            );
          })
        );
    };
  } else {
    return (dispatch) => {
      dispatch(() => null);
    };
  }
}
