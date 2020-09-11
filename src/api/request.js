import axios from "axios";

export default function requestApi() {
  let input = document.getElementById("input-id").value;

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
  let nameFixed = name.toUpperCase();
  let countriesFixed = countries.map((e) => e.country_id).join(", ");
  let countryIds = countries.map((e) => e.country_id);
  let countryPopularity = countries.map((e) => e.probability);

  let data = {
    name: nameFixed,
    countries: checkIfEmpty(countriesFixed),
    age: checkIfEmpty(age),
    gender: checkIfEmpty(gender),
    countryIds: countryIds,
    countryPopularity: countryPopularity,
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
