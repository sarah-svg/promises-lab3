const fetch = require('node-fetch');


fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
  .then(res => {
    // res.body
    return res.json();
  })
  .then(json => {
    console.log(json);
  });