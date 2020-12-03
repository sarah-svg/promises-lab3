const fetch = require('node-fetch');

function manyCharacters() {
    Promise.all([fetch('https://rickandmortyapi.com/api/character/')
    ])
        .then(([resRickAndMorty]) => {
        // console.log(resRickAndMorty)
    })

};


///////moved to its own file manyCharacterAsync.js
// const url = "https://rickandmortyapi.com/api/character/";

// const manyCharacters = async () => {
//   try {
//     const url = `https://rickandmortyapi.com/api/character/`;

//     const res = await fetch(url);
//     const json = await res.json();
 
//   } 
//     catch (err) {
 
//   }  
// };
module.exports = {
    manyCharacters
}