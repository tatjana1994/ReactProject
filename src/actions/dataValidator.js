export default function dataValidator(name, countries, age, gender) {
  let nameFixed = name.toUpperCase();
  let countriesFixed = countries.map((e) => e.country_id).join(", ");

  return {
    type: "NEW_DATA",
    name: nameFixed,
    countries: chechIfEmpty(countriesFixed),
    age: chechIfEmpty(age),
    gender: chechIfEmpty(gender),
  };
}

function chechIfEmpty(value) {
  const noResults = "No Results";

  if (value) {
    return value;
  } else {
    return noResults;
  }
}
