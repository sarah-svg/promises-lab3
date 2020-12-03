const fetch = require('node-fetch');

function fetchRickAndMorty() {
    const res = await fetch ('https://rickandmortyapi.com/api/character/')
    const json = await res.json();
    console.log(json);
}