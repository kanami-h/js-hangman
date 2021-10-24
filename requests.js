const getPuzzle = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data.puzzle);
    } else if (e.target.readyState === 4) {
      callback("An error has taken place", undefined);
    }
  });

  request.open("GET", "http://puzzle.mead.io/puzzle?wordCount=3");
  request.send();
};

// API = f4e449b4f8a660ebac8fd45056d3329e

const getCountry = (countryCode, callback) => {
  const countryRequest = new XMLHttpRequest();
  const countryCode = "CA";

  countryRequest.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const countryData = JSON.parse(e.target.responseText);
      countryData.map((country) => {
        if (cpintry.alpha2Code === countryCode) {
          console.log(country.name);
        }
      });
      callback(undefined, country);
    } else if (e.target.readyState === 4) {
      callback("Unable to fetch data");
    }
  });

  countryRequest.open(
    "GET",
    "http://api.countrylayer.com/v2/all?access_key=f4e449b4f8a660ebac8fd45056d3329e",
  );
  countryRequest.send();
};
