import axios from "axios";
import jsonData from "../data/geo.json";

export default function requestApi() {
  let input = document.getElementById("search-input-id").value;

  if (input) {
    let nationalize = "https://api.nationalize.io/?name=" + input;
    let agify = "https://api.agify.io/?name=" + input;
    let genderize = "https://api.genderize.io/?name=" + input;

    let requestNacionalize = axios.get(nationalize);
    let requestAgify = axios.get(agify);
    let requestGenderize = axios.get(genderize);
    let requestArr = [requestNacionalize, requestAgify, requestGenderize];

    return axios.all(requestArr).then(
      axios.spread((...responses) => {
        const nationalize = responses[0];
        const agify = responses[1];
        const genderize = responses[2];

        let data = dataValidator(
          nationalize.data.name,
          nationalize.data.country,
          agify.data.age,
          genderize.data.gender
        );

        return data;
      })
    );
  } else {
    throw new Error("Input field is empty.");
  }
}

function dataValidator(name, countries, age, gender) {
  let jsonArray = jsonData.features;
  let countriesArr = [];
  let nameFixed = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  let countryIds = countries.map((e) => e.country_id);
  let namePopularity = countries.map((e) => e.probability.toFixed(4));

  fixCountryNames(jsonArray, countryIds, countriesArr);

  let data = {
    name: nameFixed,
    countries: countriesArr,
    age: checkIfEmpty(age),
    gender: checkIfEmpty(gender),
    countryIds: countryIds,
    namePopularity: namePopularity,
  };

  return data;
}

function checkIfEmpty(value) {
  const noResults = "No Results";

  if (value) {
    return value;
  } else {
    return noResults;
  }
}

function fixCountryNames(jsonArr, idArr, countriesArr) {
  for (let i = 0; i < idArr.length; i++) {
    for (let j = 0; j < jsonArr.length; j++) {
      if (jsonArr[j].properties.iso_a2 === idArr[i]) {
        countriesArr.push(jsonArr[j].properties.admin);
      }
    }
  }
}
