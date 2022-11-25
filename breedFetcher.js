const request = require("request");


const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (JSON.parse(body).length === 0) {
      callback("Breed not found", null);
      return;
    }
    callback(null, JSON.parse(body)[0].description);
  });
};

module.exports = { fetchBreedDescription };