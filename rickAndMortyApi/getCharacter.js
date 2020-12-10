const fetch = require('node-fetch');

const getCharacter = (id) => {

  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((data) => 
      `Name: ${data.name}, Status: ${data.status}, Species: ${data.species}`);
};

module.exports = { getCharacter };
