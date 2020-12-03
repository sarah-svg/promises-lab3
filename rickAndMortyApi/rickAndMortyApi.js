// write a rickAndMortyApi.js and rickAndMortyApi.test.js file
// export a function getCharacter that takes an id and returns a promise that resolves to a character
// return only the characters name, status, and species
// WRITE YOUR TESTS FIRST

const url = "https://rickandmortyapi.com/api/character/";

////get character


const fetch = require('node-fetch');

const fetchRickAndMorty = (id) =>  {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    return fetch(url)
    .then((res) => res.json())
    .then(
        (data) =>
        `Name: ${data.name}, Status: ${data.status}, Species: ${data.species}`
    );
    console.log(name);
};
module.exports = { fetchRickAndMorty };