type DetailedCountryLocation = {
  name: {
    common: string;
    official: string;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  flag: string;
};
async function getCountrySuffixes() {
  const GET_CONTENT_LOCATIONS = `https://restcountries.com/v3.1/all`;
  const response = await fetch(GET_CONTENT_LOCATIONS);
  const locations = await response.json();

  return locations.map((item: DetailedCountryLocation) => {
    const { name, idd, flag } = item;
    return {
      name: name.common,
      idd: `${idd.root}${idd.suffixes[0]}`,
      flag,
    };
  });
}
getCountrySuffixes().then((data) => console.log(data));
