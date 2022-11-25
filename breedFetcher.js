const request = require("request");

const query = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${query}`;

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  if (JSON.parse(body).length === 0) {
    console.log("Breed not found");
    return;
  }
  console.log(JSON.parse(body)[0].description);
});