const fetch = require('node-fetch');


// fetch('https://rickandmortyapi.com/api/character')
//     .then(res => {
//         return res.json();
//     })
//     .then(json => {
//         console.log(json);
//     })
Promise.all([
fetch('https://rickandmortyapi.com/api/character')
])
.then(name => {
           console.log(name);
      });